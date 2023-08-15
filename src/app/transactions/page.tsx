"use client";

import {
  Box,
  Container,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";

import { Sidebar } from "@/components/Sidebar";
import { TransactionItem } from "@/components/TransactionItem";

export default function Page() {
  const transactions = [
    { title: "PayPal", description: "Online purchase", value: -100 },
    { title: "Lidl", description: "Groceries", value: -25.76 },
    { title: "Refund", description: "refund", value: 100 },
    { title: "Adobe", description: "cloud subscription", value: -15.22 },
    { title: "PayPal", description: "Online purchase", value: -190.43 },
  ];

  return (
    <Sidebar>
      <Box
        w="full"
        bg="gray.900"
        px={{ base: "4", md: "6" }}
        py="1"
        boxShadow="sm"
        borderRadius="lg"
      >
        <HStack spacing="4" justify="space-between">
          <Text textStyle="lg" fontWeight="medium">
            Transactions Overview
          </Text>
          <IconButton
            size={{ base: "sm", sm: "md" }}
            variant="tertiary"
            icon={<FiMoreVertical />}
            aria-label="Open context menu"
          />
        </HStack>
      </Box>
      <Stack spacing={1}>
        {transactions.map((transaction, index) => (
          <TransactionItem key={index} {...transaction} />
        ))}
      </Stack>
    </Sidebar>
  );
}
