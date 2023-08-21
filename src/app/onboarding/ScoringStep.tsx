import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  IconButton,
  Img,
  Link,
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
  useBreakpointValue,
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
import { disconnect } from "@wagmi/core";
import posthog from "posthog-js";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { FiTrash2 } from "react-icons/fi";
import { Address } from "viem";
import { useAccount, useSignMessage, useWalletClient } from "wagmi";

import { analysePortfolioTrend, runScoringChecks } from "@/lib/analysis";
import { QuoteCurrency } from "@/lib/api";
import { truncateEthereumAddress } from "@/lib/helpers";

import chains from "./chains.json";

export const ScoringStep = ({
  credit,
  setCredit,
  subStep,
  setSubStep,
}: {
  credit: number;
  setCredit: any;
  subStep: any;
  setSubStep: any;
}) => {
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
      if (address && !addressExistsInWallets(address)) {
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

  const getRandomNumberBetween = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const delay = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const computeScore = async (address: Address) => {
    setIsLoading(true);
    const result = getRandomNumberBetween(70, 100); //await runScoringChecks(address, chains, QuoteCurrency.EUR);

    const obj = {
      address,
      score: Math.ceil(result),
    };
    await delay(5000); // Wait for 5 seconds

    setWallets((wallets) => [...wallets, obj]);
    setCredit(obj.score);
    await disconnect();
    setIsLoading(false);
  };

  const updateValue = (newValue: number) => {
    const val = value + newValue;
    setValue(val);
    setCredit(val);
  };

  const addressExistsInWallets = (address: Address | undefined) => {
    return wallets.some((wallet) => wallet.address === address);
  };

  const handleDeleteWallet = (address: Address | undefined) => {
    const updatedWallets = wallets.filter(
      (wallet) => wallet.address !== address
    );
    setWallets(updatedWallets);
  };

  const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });

  const gradientColors = ["#6C3483", "#884EA0", "#A569BD", "#BB8FCE"];

  const GradientNumber: React.FC<{ credit: number }> = ({ credit }) => {
    const number = `${credit * 10}€/mo`;
    return (
      <Flex direction="column" align="center" justify="center" height="100px">
        <HStack spacing={2}>
          {number.split("").map((char, index) => (
            <Text
              key={index}
              fontSize="4xl"
              fontWeight="bold"
              color={gradientColors[index % gradientColors.length]}
            >
              {char}
            </Text>
          ))}
        </HStack>
      </Flex>
    );
  };

  const [runConfetti, setRunConfetti] = useState(false);

  useEffect(() => {
    if (subStep === 1) {
      setRunConfetti(true);

      const timer = setTimeout(() => {
        setRunConfetti(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [subStep]);

  return (
    <Box bg="white" borderRadius="lg" p={15}>
      {runConfetti && <Confetti />}
      {subStep === 0 ? (
        <Stack spacing="7" mt="5">
          <Heading size={"lg"}>Connect an account</Heading>
          <Text>
            Applying for your self-custodial credit card is quick and easy,
            start by connecting up to 3 wallets. Don&apos;t worry, you can apply
            for better credit line after too by adding transactional wallets
            later from your account.
          </Text>
          <Text mb={10}>
            For more information on how your score is calculated, visit{" "}
            <Link
              href="https://github.com/Absurd-finance/whitepaper/blob/master/README.md"
              isExternal
              color="blue.500"
            >
              this link
            </Link>
            .
          </Text>
          <Box width="100%" overflowX="auto">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th width="60%">Address</Th>
                  <Th width="30%" isNumeric>
                    Score
                  </Th>
                  <Th width="10%"></Th>
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
          </Box>
          {address ? (
            <>
              {addressExistsInWallets(address) ? (
                <Button size={buttonSize} onClick={() => disconnect()}>
                  Wallet already scored, reconnect with a new wallet
                </Button>
              ) : (
                <>
                  {!isLoading && (
                    <Button size={buttonSize} onClick={() => signMessage()}>
                      Score connected wallet
                    </Button>
                  )}
                </>
              )}
            </>
          ) : (
            <CustomConnectButton />
          )}
        </Stack>
      ) : (
        <Stack spacing="8" mt="5" alignItems="center" justifyContent="center">
          <Heading size={"lg"}>
            Congrats! You are eligible for a credit line of{" "}
          </Heading>
          <GradientNumber credit={credit} />
        </Stack>
      )}
    </Box>
  );
};

const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        if (!connected) {
          return (
            <Button textAlign="start" onClick={openConnectModal}>
              Connect your wallet to score it
            </Button>
          );
        }

        if (chain.unsupported) {
          return (
            <Box textAlign="start" onClick={openChainModal}>
              Chain Not Supported
            </Box>
          );
        }

        return <Button>Wallet Connected</Button>;
      }}
    </ConnectButton.Custom>
  );
};
