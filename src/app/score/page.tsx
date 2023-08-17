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
  Image,
  useBreakpointValue
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { ScoringStep } from "./ScoringStep";
import { ProductsStep } from "./ProductsStep";
import { EmailStep } from "./EmailStep";
import { Stepper } from "../../components/StepsWithCirclesAndText/Stepper";

export default function Page() {
  const [credit, setCredit] = useState<number>(0);
  const [activeStep, setActiveStep] = useState(0);
  const [subStep, setSubStep] = useState(0);
  
  const handleContinue = () => {
    if (activeStep === 0 && subStep === 0) {
      setSubStep(1);
    } else {
      setActiveStep(activeStep + 1);
      setSubStep(0);
    }
  };  

  const handleBack = () => {
    if (activeStep === 0 && subStep === 1) {
      setSubStep(0);
    } else {
      setActiveStep(activeStep - 1);
    }
  };

  const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });

  return (
    <>
      <Box bg="gray.100" minHeight="100vh">
        <Box as="section" w="100%">
          <Container maxW="100%">
            <Box bg="bg.surface" py="4" boxShadow="sm" borderRadius="lg" display="flex" justifyContent="space-between" alignItems="center">
              <Image src="/images/logo.png" alt="Your Logo" width="51px" height="40px"/>
              <Stack spacing="1">
                <ConnectButton />
              </Stack>
            </Box>
          </Container>
        </Box>

        <Container maxW={{ base: "90%", md: "80%", lg: "70%" }} py={{ base: "3", md: "6" }}>
          <Box bg="white" borderRadius="lg" p={5}>
            <Stack spacing={1}>
              <Stepper currentStep={activeStep} setStep={setActiveStep} />
              {activeStep === 0 && <ScoringStep credit={credit} setCredit={setCredit} subStep={subStep} setSubStep={setSubStep} />}
              {activeStep === 1 && <ProductsStep credit={credit} />}
              {activeStep === 2 && <EmailStep />}
              <ButtonGroup mt="3" size="sm">
                {activeStep > 0 || subStep > 0 ? (
                  <Button
                    size={buttonSize}
                    variant="outline"
                    leftIcon={<FiArrowLeft />}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                ) : null}
                {activeStep !== 2 && credit !== 0 && (
                  <Button
                    size={buttonSize}
                    rightIcon={<FiArrowRight />}
                    colorScheme="teal"
                    variant="outline"
                    onClick={handleContinue}
                  >
                    Continue
                  </Button>
                )}
              </ButtonGroup>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}
