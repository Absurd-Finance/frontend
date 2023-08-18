import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { FiCheck, FiArrowRight } from "react-icons/fi";

interface LoanTermsProps {
  terms: string[];
}

const renderTerm = (term) => {
  const parts = term.split('**');
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index}>{part}</strong>;
    }
    return part;
  });
};

const LoanTerms: React.FC<LoanTermsProps> = ({ terms }) => (
  <Box mt="4">
    <List spacing={2}>
      {terms.map((term, index) => (
        <ListItem key={index}>
          <ListIcon as={FiCheck} color="green.500" />
          {renderTerm(term)}
        </ListItem>
      ))}
    </List>
  </Box>
);  

interface ProductCardProps {
  title: string;
  price: number;
  children: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, children }) => (
  <Card
    bg="gray.100" 
    boxShadow="lg"
    p={{ base: 3, md: 6 }}
    borderRadius="md" 
    width={{ base: "100%", md: "auto" }}
    mx="auto"
    m={[0, 0]}
  >
    <CardHeader>
      <Heading 
        size="lg" 
        color={useColorModeValue("gray.700", "gray.300")}
        fontWeight="extrabold"
        fontSize={{ base: "2xl", md: "3xl" }}
        textTransform="uppercase"
      >
        {title}</Heading>
    </CardHeader>
    <CardBody>
      <Stack spacing={3}>
        <Text
          color={useColorModeValue("gray.700", "gray.300")}
          fontWeight="extrabold"
          fontSize={{ base: "2xl", md: "3xl" }}
          textTransform="uppercase"
          mb={0}
        >
          {price}&euro;/mo
        </Text>
        {children}
      </Stack>
    </CardBody>
  </Card>
);
  
interface ProductsStepProps {
  credit: number;
}

export const ProductsStep = ({ credit }) => {
  const standardTerms = [
    `**Generous Credit**: Tap into a generous ${credit * 10}€/mo revolving credit line`,
    "**Zero Hassles**: Transact globally with our Visa credit card without any transaction fees",
    "**Flexible Repayment**: Enjoy a 30-day free repayment, then only 20% APR on the balance",
    "**Modern Finance**: Choose to repay in fiat or crypto — always with 0% conversion fees",
    "**Build Your Credit**:  Boost your credit history with each purchase and repayment",
    "**Rewarding Every Step**: Access exclusive perks and cashbacks with every transaction"
  ];
  
  const metalTerms = ["Anything here"];

  const minWidth = '320px';
  
  return (
    <>
    <Box maxW="960px" margin="0 auto" p={{ base: 1, md: 2 }}>

      <Flex 
        flexWrap="wrap" 
        justify="center"
        justifyItems="center"
        gap={0}
      >
        <ProductCard
          minW={minWidth}
          flex="1"
          title="Web3 Settlers' credit card"
          price="For just 15"
        >
            <LoanTerms terms={standardTerms} />
        </ProductCard>
          {/*
        <ProductCard
          minW={minWidth}
          flex="1"
          title="Metal"
          price="15"
          LoanTerms terms={metalTerms} />}
        />
          </ProductCard>
          */}

      </Flex>
    </Box>
    </>
  );
};
