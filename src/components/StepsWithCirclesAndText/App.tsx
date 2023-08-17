import { Box, Container, Stack } from '@chakra-ui/react';
import { Step } from './Step';
import { steps } from './data';

interface AppProps {
  currentStep: number;
  setStep: (step: number) => void;
}

export const App: React.FC<AppProps> = ({ currentStep, setStep }) => {
  return (
    <Box bg="bg.surface">
      <Container py={{ base: '4', md: '8' }}>
        <Stack spacing="0" direction={{ base: 'column', md: 'row' }}>
          {steps.map((step, id) => (
            <Step
              key={id}
              title={step.title}
              isActive={currentStep === id}
              isCompleted={currentStep > id}
              isFirstStep={id === 0}
              isLastStep={steps.length === id + 1}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}


export default App;
