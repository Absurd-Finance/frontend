import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  HStack,
  Heading,
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
} from "@chakra-ui/react";
import { FiArrowRight, FiCheck } from "react-icons/fi";

interface LoanTermsProps {
  terms: string[];
}

const renderTerm = (term: string) => {
  const parts = term.split("**");
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index}>{part}</strong>;
    }
    return part;
  });
};

const LoanTerms: React.FC<LoanTermsProps> = ({ terms }) => (
  <Box mt="2"> 
    <List spacing={1}> 
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
  price: string;
  children: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  children,
}) => (
  <Card
    bg="gray.100"
    boxShadow="lg"
    p={{ base: 1, md: 4 }}  // Further reduced padding for smaller screens
    borderRadius="md"
    width={{ base: "95%", sm: "90%", md: "auto" }} 
    mx="auto"
    my={2}  
  >
    <CardHeader>
      <Heading
        size="lg"
        color={useColorModeValue("gray.700", "gray.300")}
        fontWeight="extrabold"
        fontSize={{ base: "lg", md: "xl" }} 
        textTransform="uppercase"
      >
        {title}
      </Heading>
    </CardHeader>
    <CardBody>
      <Stack spacing={2}>
        <HStack
          color={useColorModeValue("gray.700", "gray.300")}
          fontWeight="bold"
          fontSize={{ base: "md", md: "lg" }} 
          textTransform="uppercase"
          mb={0}
        >
          <Text textDecoration="line-through" fontSize={{ base: "md", md: "xl" }}>{price}&euro;/mo</Text>
          <Text fontSize={{ base: "xl", md: "2xl" }}>6/mo free!</Text>
        </HStack>
        {children}
      </Stack>
    </CardBody>
  </Card>
);

interface ProductsStepProps {
  credit: number;
}

export const ProductsStep = ({ credit }: { credit: number }) => {
  const standardTerms = [
    `**Generous Credit**: Tap into a generous ${
      credit * 10
    }€/mo plafond revolving credit line`,
    "**Zero Hassles**: Transact globally with our Visa credit card without any transaction fees",
    "**Flexible Repayment**: Enjoy a 30-day free repayment, then only 20% APR on the balance",
    "**Free Offramp**: Choose to repay in fiat or crypto — always with 0% conversion fees",
    "**Build Your Credit**:  Boost your credit history with each purchase and repayment",
    "**Rewarding Every Step**: Access exclusive perks and cashbacks with every transaction",
  ];

  const metalTerms = ["Anything here"];

  const minWidth = "320px";

  return (
    <>
      <Box maxW="960px" margin="0 auto" p={{ base: 1, md: 2 }}>
        <Flex
          flexWrap="wrap"
          justify="center"
          justifyItems="center"
          gap={2}  
          minW="280px"  
          flex="1"
        >
          <ProductCard
            title="Get the web3-first credit card"
            price="For just 5"
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
