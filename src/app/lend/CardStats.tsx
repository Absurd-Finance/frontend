import {
  Box,
  Divider,
  Flex,
  Icon,
  Image,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Switch,
  Tab,
  TabList,
  Tabs,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

export const CardStats = () => {
  return (
    <Box
      p={4}
      borderRadius="md"
      boxShadow="md"
      width="200px"
      textAlign="center"
      mb={4}
    >
      <Stat>
        <StatLabel>
          Collected Fees
          <Tooltip label="More information about this stat" placement="bottom">
            <Icon as={FiInfo} ml={2} />
          </Tooltip>
        </StatLabel>
        <StatNumber>£0.00</StatNumber>
      </Stat>
    </Box>
  );
};
