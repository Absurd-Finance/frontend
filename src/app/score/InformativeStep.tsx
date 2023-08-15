import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FiCheck } from "react-icons/fi";

export const InformativeStep = ({ credit }: { credit: number }) => {
  return (
    <Box
      as="section"
      p="4"
      boxShadow="sm"
      borderRadius="lg"
      borderStyle="dotted"
      borderWidth="1px"
      mt="8"
    >
      <Stack spacing="8">
        <Heading size="md">Terms of the Loan</Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FiCheck} color="green.500" />
            Revolving credit line of {credit * 10}&euro;/mo
          </ListItem>
          <ListItem>
            <ListIcon as={FiCheck} color="green.500" />
            Visa credit card with zero transaction fees
          </ListItem>
          <ListItem>
            <ListIcon as={FiCheck} color="green.500" />
            Free repayment in 30 days, then 20% APR on the remaining balance
          </ListItem>
          <ListItem>
            <ListIcon as={FiCheck} color="green.500" />
            Pay back in fiat or crypto with 0% conversion fees
          </ListItem>
          <ListItem>
            <ListIcon as={FiCheck} color="green.500" />
            Lots of perks and cashback (TBA)
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
};
