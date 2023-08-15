import {
  Box,
  Button,
  Container,
  Heading,
  IconButton,
  Skeleton,
  Stack,
  Step,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useSteps,
  useToast,
} from "@chakra-ui/react";
import {
  ConnectButton,
  useAccountModal,
  useChainModal,
  useConnectModal,
} from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { Address } from "viem";
import { useAccount, useSignMessage, useWalletClient } from "wagmi";

import { analysePortfolioTrend, runScoringChecks } from "@/lib/analysis";
import { QuoteCurrency } from "@/lib/api";
import { truncateEthereumAddress } from "@/lib/helpers";

import chains from "./chains.json";

export const ScoringStep = ({ setCredit }) => {
  const [value, setValue] = useState<number>(0);
  const [wallets, setWallets] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { address, isConnecting, isDisconnected } = useAccount();
  const { openAccountModal } = useAccountModal();
  const toast = useToast();
  const { signMessage } = useSignMessage({
    message:
      "By signing this message I confirm that I am the unique owner of this wallet.",
    onSuccess(d) {
      if (!addressExistsInWallets(address)) {
        computeScore(address);
      } else {
        toast({
          title: "Error",
          description: "This wallet is already in the list",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    },
    onError(error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Signing unsuccessful, please retry",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  const computeScore = async (address: Address) => {
    setIsLoading(true);
    const result = 33; //await runScoringChecks(address, chains, QuoteCurrency.EUR);

    const obj = {
      address: address,
      score: Math.ceil(result),
    };
    setWallets((wallets) => [...wallets, obj]);
    setCredit(obj.score);
    setIsLoading(false);
  };

  const updateValue = (newValue: number) => {
    const val = value + newValue;
    setValue(val);
    setCredit(val);
  };

  const addressExistsInWallets = (address: Address) => {
    return wallets.some((wallet) => wallet.address === address);
  };

  const handleDeleteWallet = (address: Address) => {
    const updatedWallets = wallets.filter(
      (wallet) => wallet.address !== address
    );
    setWallets(updatedWallets);
  };

  return (
    <Stack spacing="8" mt="5">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Address</Th>
              <Th isNumeric>Score</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {isLoading && (
              <Tr>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td></Td>
              </Tr>
            )}
            {wallets.map((wallet, index) => (
              <Tr key={index}>
                <Td>{truncateEthereumAddress(wallet.address)}</Td>
                <Td isNumeric>{wallet.score}</Td>
                <Td>
                  <IconButton
                    variant="ghost"
                    colorScheme="red"
                    aria-label="Delete"
                    icon={<FiTrash2 />}
                    onClick={() => handleDeleteWallet(wallet.address)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {addressExistsInWallets(address) ? (
        <Button onClick={openAccountModal}>Add another wallet</Button>
      ) : (
        <Button onClick={() => signMessage()}>Use connected wallet</Button>
      )}
    </Stack>
  );
};
