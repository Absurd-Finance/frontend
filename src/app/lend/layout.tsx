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

export default function Layout({ children }: { children: React.ReactNode }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex direction="column" w="100%">
        <Flex
          as="nav"
          justifyContent="space-between"
          alignItems="center"
          p={4}
          w="100%"
        >
          <Flex alignItems="center">
            <Image
              src="/path/to/logo.png"
              alt="Your Logo"
              boxSize="30px"
              mr={4}
            />
            <Switch
              size="md"
              isChecked={colorMode === "dark"}
              onChange={toggleColorMode}
            />
          </Flex>
          <Tabs isLazy>
            <TabList>
              <Tab fontWeight="bold">Markets</Tab>
              <Tab fontWeight="bold">Dashboard</Tab>
            </TabList>
          </Tabs>
          <ConnectButton />
        </Flex>
        <Divider />
      </Flex>
      {children}
    </>
  );
}
