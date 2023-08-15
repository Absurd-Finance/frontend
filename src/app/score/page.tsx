"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Heading,
  IconButton,
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
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { CardTierStep } from "./CardTierStep";
import { InformativeStep } from "./InformativeStep";
import { ScoringStep } from "./ScoringStep";

const steps = [
  { title: "First", description: "Credit Scoring" },
  { title: "Second", description: "Open Credit Line" },
  { title: "Third", description: "Order Card" },
];

export default function Page() {
  const [credit, setCredit] = useState<number>(0);
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const activeStepText = steps[activeStep].description;

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

      <Container maxW="md" py={{ base: "4", md: "6" }}>
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={"xl"}>Absurd Finance</Heading>
          </Stack>
        </Stack>
        <Stack>
          <Stepper size="sm" index={activeStep} gap="0" mt="5">
            {steps.map((step, index) => (
              <Step key={index} gap="0">
                <StepIndicator>
                  <StepStatus complete={<StepIcon />} />
                </StepIndicator>
                <StepSeparator _horizontal={{ ml: "0" }} />
              </Step>
            ))}
          </Stepper>
          <Text>
            Step {activeStep + 1}: <b>{activeStepText}</b>
          </Text>
        </Stack>
        {activeStep == 0 && <ScoringStep setCredit={setCredit} />}
        {activeStep == 1 && <InformativeStep credit={credit} />}
        {activeStep == 2 && <CardTierStep />}
        <ButtonGroup mt="5" size="sm">
          {activeStep > 0 && (
            <Button
              variant="outline"
              leftIcon={<FiArrowLeft />}
              onClick={() => setActiveStep(activeStep - 1)}
            >
              Back
            </Button>
          )}
          {activeStep !== 2 && credit !== 0 && (
            <Button
              rightIcon={<FiArrowRight />}
              colorScheme="teal"
              variant="outline"
              onClick={() => setActiveStep(activeStep + 1)}
            >
              Continue
            </Button>
          )}
        </ButtonGroup>
      </Container>
    </>
  );
}
