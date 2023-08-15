"use client";

import {
  Box,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  Icon,
  IconButton,
  Image,
  Stack,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { CardStats } from "./CardStats";
import { MarketCard } from "./MarketCard";

export default function Page() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        mt={50}
        w="full"
      >
        <CardStats />
        <CardStats />
        <CardStats />
      </Flex>
      <Text fontSize="3xl" fontWeight="bold" mt={8}>
        Markets
      </Text>

      <Box
        mt={4}
        w="full"
        p={4}
        borderRadius="md"
        boxShadow="md"
        borderWidth="1px"
      >
        <MarketCard
          avatarSrc="path_to_avatar_image.jpg"
          token="USDe"
          number1="Number1"
          number2="Number2"
          number3="Number3"
        />
        <MarketCard
          avatarSrc="path_to_avatar_image.jpg"
          token="EURe"
          number1="Number1"
          number2="Number2"
          number3="Number3"
        />
        <MarketCard
          avatarSrc="path_to_avatar_image.jpg"
          token="GBPe"
          number1="Number1"
          number2="Number2"
          number3="Number3"
        />
      </Box>
    </>
  );
}
