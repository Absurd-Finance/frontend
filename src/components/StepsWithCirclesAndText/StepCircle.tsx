import { Circle, Icon, SquareProps } from '@chakra-ui/react';
import { HiCheck } from 'react-icons/hi';

interface RadioCircleProps extends SquareProps {
  isCompleted: boolean;
  isActive: boolean;
}

export const StepCircle = (props: RadioCircleProps) => {
  const { isCompleted, isActive } = props;

  let borderColor;

  if (isCompleted) {
    borderColor = "darkgray";
  } else if (isActive) {
    borderColor = "black";
  } else {
    borderColor = "lightgray";
  }

  return (
    <Circle
      size="8"
      bg="transparent"
      borderWidth="2px"
      borderColor={borderColor}
      {...props}
    >
      {isCompleted ? (
        <Icon as={HiCheck} color={borderColor} boxSize="5" />
      ) : null}
    </Circle>
  );
}
