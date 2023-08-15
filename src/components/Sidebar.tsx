import {
  Box,
  Circle,
  Flex,
  Stack,
  useColorModeValue as mode,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import {
  BiBuoy,
  BiChart,
  BiCog,
  BiCreditCard,
  BiDollarCircle,
  BiEnvelope,
  BiHome,
  BiWallet,
} from "react-icons/bi";

import { AccountSwitcher } from "./AccountSwitcher";
import { NavGroup } from "./NavGroup";
import { NavItem } from "./NavItem";

interface SidebarProps {
  children?: ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const sidebarDisplay = useBreakpointValue({ base: "none", md: "block" });

  return (
    <Box height="100vh" overflow="hidden" position="relative">
      <Flex h="full" id="app-container">
        <Box
          w="64"
          display={sidebarDisplay}
          bg="gray.900"
          color="white"
          fontSize="sm"
        >
          <Flex h="full" direction="column" px="4" py="4">
            <AccountSwitcher />
            <Stack spacing="8" flex="1" overflow="auto" pt="8">
              <Stack spacing="1">
                <NavItem
                  icon={<BiHome />}
                  label="Dashboard"
                  active={pathname === "/"}
                  href="/"
                />
              </Stack>
              <NavGroup label="Your Account">
                <NavItem
                  icon={<BiCreditCard />}
                  label="Transactions"
                  active={pathname === "/transactions"}
                  href="/transactions"
                />
                <NavItem
                  icon={<BiWallet />}
                  label="Repayments"
                  active={pathname === "/repayments"}
                  href="/repayments"
                />
                <NavItem
                  icon={<BiDollarCircle />}
                  label="Investments"
                  active={pathname === "/investments"}
                  href="/investments"
                />
              </NavGroup>
            </Stack>
            <Box>
              <Stack spacing="1">
                <NavItem
                  subtle
                  icon={<BiCog />}
                  label="Settings"
                  active={pathname === "/settings"}
                  href="/settings"
                />
                <NavItem
                  subtle
                  icon={<BiBuoy />}
                  label="Help & Support"
                  active={pathname === "/support"}
                  href="/support"
                />
              </Stack>
            </Box>
          </Flex>
        </Box>
        <Box bg={mode("white", "gray.800")} flex="1" p="6">
          <Box
            w="full"
            h="full"
            overflowY="auto"
            color={mode("gray.200", "gray.700")}
          >
            {children}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
