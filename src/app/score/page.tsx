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
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { ScoringStep } from "./ScoringStep";
import { ProductsStep } from "./ProductsStep";
import { EmailStep } from "./EmailStep";
import { Stepper } from "../../components/StepsWithCirclesAndText/Stepper";
import { usePostHog } from "../../app/providers";

export default function Page() {
  const [credit, setCredit] = useState<number>(0);
  const [activeStep, setActiveStep] = useState(0);
  const [subStep, setSubStep] = useState(0);
  
  const posthog = usePostHog();

  const handleContinue = () => {
    posthog.capture('Continue clicked', {
        'activeStep': activeStep,
        'subStep': subStep
    });

    if (activeStep === 0 && subStep === 0) {
      setSubStep(1);
    } else {
      setActiveStep(activeStep + 1);
      setSubStep(0);
    }
};
<<<<<<< HEAD
=======

>>>>>>> 319cc48 (EmailStep changes, copy and PostHog integration)

  const handleBack = () => {
    if (activeStep === 0 && subStep === 1) {
      setSubStep(0);
    } else {
      setActiveStep(activeStep - 1);
    }
  };

  const buttonSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });

  return (
    <Flex direction="column" minHeight="100vh" bg="gray.100">
      <Box as="section" w="100%">
          <Container maxW="100%">
            <Box bg="bg.surface" py="4" boxShadow="sm" borderRadius="lg" display="flex" justifyContent="space-between" alignItems="center">
              <Image src="/images/logo.png" alt="Absurd Logo" width="51px" height="40px"/>
              <Stack spacing="1">
                <ConnectButton />
              </Stack>
            </Box>
          </Container>
        </Box>

      <Flex flex="1" direction="column" paddingBottom="80px">
        <Container maxW={{ base: "90%", md: "80%", lg: "70%" }} py={{ base: "3", md: "6" }} paddingBottom="60px"> {/* Added paddingBottom */}
          <Box bg="white" borderRadius="lg" p={5}>
            <Stack spacing={1}>
              <Stepper currentStep={activeStep} setStep={setActiveStep} />
              {activeStep === 0 && <ScoringStep credit={credit} setCredit={setCredit} subStep={subStep} setSubStep={setSubStep} />}
              {activeStep === 1 && <ProductsStep credit={credit} />}
              {activeStep === 2 && <EmailStep />}
            </Stack>
          </Box>
        </Container>
      </Flex>

      <Flex
            position="sticky"
            bottom="0"
            left="0"
            right="0"
            bg="white"
            padding="4"
            borderTop="1px solid"
            borderColor="gray.200"
            justifyContent="flex-end"
            zIndex="100"
            height="80px"
            width="100%"
            boxShadow="sm" 
        >
            <Container maxW={{ base: "90%", md: "80%", lg: "70%" }}>
               <Flex justifyContent="flex-end">
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
                </Flex>
              </Container>
        </Flex>
    </Flex>
);
<<<<<<< HEAD
};
=======
}

>>>>>>> 319cc48 (EmailStep changes, copy and PostHog integration)
