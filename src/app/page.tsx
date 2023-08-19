"use client";

import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

import { Sidebar } from "@/components/Sidebar";

export default function Page() {
  return (
    <Sidebar>
      <Box as="section" py={{ base: "4", md: "8" }}>
        <Container>
          <StatGroup>
            <Stat>
              <StatLabel>Total spent</StatLabel>
              <StatNumber>£0.00</StatNumber>
              <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Collected Fees</StatLabel>
              <StatNumber>£0.00</StatNumber>
              <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Collected Fees</StatLabel>
              <StatNumber>£0.00</StatNumber>
              <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>
          </StatGroup>
        </Container>
      </Box>
    </Sidebar>
  );
}

/*
export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { chain } = useNetwork();
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: "Sign to check your score",
    onSuccess(data) {
      checkWalletScore();
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
  const toast = useToast();
  const [score, setScore] = useState<number>(0);

  const getScore = async (wallet: string) => {
    return Math.floor(Math.random() * 100);
  };

  const checkWalletScore = async () => {
    if (isConnecting || isDisconnected) {
      toast({
        title: "Error",
        description: "Please connect your wallet first",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      const score = await getScore(address);
      setScore(score);
    }
  };

  return (
    <>
      <Box as="section">
        <Container>
          <Box bg="bg.surface" py="4" boxShadow="sm" borderRadius="lg">
            <Stack spacing="1">
              <ConnectButton />
            </Stack>
          </Box>
        </Container>
      </Box>

      <Container maxW="md" py={{ base: "12", md: "24" }}>
        <Stack spacing="8">
          <Stack spacing="6">
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={"xl"}>Absurd Finance</Heading>
              <Text color="fg.muted">Check your on-chain score</Text>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Button onClick={() => checkWalletScore()}>
              Use Connected Wallet
            </Button>
          </Stack>

          {score !== 0 && (
            <Button
              onClick={() => setScore(0)}
              colorScheme={score > 35 ? "green" : "red"}
              disabled
            >
              Score: {score}
            </Button>
          )}
        </Stack>
      </Container>
    </>
  );
}
*/
