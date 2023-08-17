import {
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

interface TransactionItemProps {
  title: string;
  description: string;
  value: number;
}

export const TransactionItem = ({
  title,
  description,
  value,
}: TransactionItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box as="section" py={{ base: "2", md: "2" }}>
        <Container maxW="3xl">
          <Box
            bg="gray.700"
            boxShadow="md"
            borderRadius="lg"
            p={{ base: "4", md: "6" }}
            onClick={onOpen}
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align={{ base: "center", md: "start" }}
            >
              <HStack spacing="5">
                <Avatar />
                <Stack spacing="1">
                  <Text textStyle="lg" fontWeight="medium" color="gray.200">
                    {title}
                  </Text>
                  <Text textStyle="sm" color="gray.500">
                    {description}
                  </Text>
                </Stack>
              </HStack>

              <Button colorScheme={value > 0 ? "green" : "gray"}>
                {value}&nbsp;&euro;
              </Button>
            </Flex>
          </Box>
        </Container>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Transaction Info</DrawerHeader>

          <DrawerBody>
            <Stack spacing="4">
              <Text textStyle="lg" fontWeight="medium" color="gray.200">
                Title
              </Text>
              <Text textStyle="sm" color="gray.500">
                {title}
              </Text>
              <Text textStyle="lg" fontWeight="medium" color="gray.200">
                Description
              </Text>
              <Text textStyle="sm" color="gray.500">
                {description}
              </Text>
              <Text textStyle="lg" fontWeight="medium" color="gray.200">
                Value
              </Text>
              <Text textStyle="sm" color="gray.500">
                {value}&nbsp;&euro;
              </Text>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="red">Report an issue</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
