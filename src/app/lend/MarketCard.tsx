import { Avatar, Button, Flex, HStack, Text } from "@chakra-ui/react";

export const MarketCard = ({ avatarSrc, token, number1, number2, number3 }) => (
  <Flex
    align="center"
    justify="space-between"
    boxShadow="md"
    p={4}
    borderRadius="md"
    mb={4}
    width="full"
  >
    <HStack>
      <Avatar src={avatarSrc} mr={4} />
      <Text flexShrink={0} fontWeight="bold">
        {token}
      </Text>
    </HStack>
    <Text flexShrink={0}>{number1}</Text>
    <Text flexShrink={0}>{number2}</Text>
    <Text flexShrink={0} color="green.500">
      {number3}
    </Text>
    <Button colorScheme={"teal"}>Invest</Button>
  </Flex>
);
