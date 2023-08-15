import {
  Box,
  Flex,
  FlexProps,
  HStack,
  Img,
  useMenuButton,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { HiSelector } from "react-icons/hi";

export const AccountSwitcher = () => {
  return (
    <Flex
      w="full"
      display="flex"
      alignItems="center"
      rounded="lg"
      bg="gray.700"
      px="3"
      py="2"
      fontSize="sm"
      userSelect="none"
      cursor="pointer"
      outline="0"
      transition="all 0.2s"
      _active={{ bg: "gray.600" }}
      _focus={{ shadow: "outline" }}
    >
      <HStack flex="1" spacing="3">
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== "loading";
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === "authenticated");

            if (!connected) {
              return (
                <Box textAlign="start" onClick={openConnectModal}>
                  Connect Wallet
                </Box>
              );
            }

            if (chain.unsupported) {
              return (
                <Box textAlign="start" onClick={openChainModal}>
                  Chain Not Supported
                </Box>
              );
            }

            return (
              <>
                {chain && chain.hasIcon && (
                  <Img
                    w="8"
                    h="8"
                    rounded="md"
                    objectFit="cover"
                    src={chain.iconUrl}
                  />
                )}
                <Box textAlign="start" onClick={openAccountModal}>
                  <Box noOfLines={1} fontWeight="semibold">
                    {account.displayName}
                  </Box>
                  <Box fontSize="xs" color="gray.400">
                    {account.displayBalance ? account.displayBalance : ""}
                  </Box>
                </Box>
              </>
            );
          }}
        </ConnectButton.Custom>
      </HStack>
      <Box fontSize="lg" color="gray.400">
        <HiSelector />
      </Box>
    </Flex>
  );
};
