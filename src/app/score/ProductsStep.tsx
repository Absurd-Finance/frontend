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
  
  const LoanTerms: React.FC<LoanTermsProps> = ({ terms }) => (
    <Box mt="4">
      <List spacing={2}>
        {terms.map((term, index) => (
          <ListItem key={index}>
            <ListIcon as={FiCheck} color="green.500" />
            {term}
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
      p={{ base: 4, md: 8 }}
      borderRadius="md" 
      width={{ base: "100%", md: "auto" }}
      mx="auto"
      m={[4, 6]}
    >
      <CardHeader>
        <Heading size="lg" mb={3}>{title}</Heading>
      </CardHeader>
      <CardBody>
        <Stack spacing={4}>
          <Text
            color={useColorModeValue("gray.700", "gray.300")}
            fontWeight="extrabold"
            fontSize={{ base: "2xl", md: "3xl" }}
            textTransform="uppercase"
            mb={5}
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
      `Revolving credit line of ${credit * 10}&euro;/mo`,
      "Visa credit card with zero transaction fees",
      "Free repayment in 30 days, then 20% APR on the remaining balance",
      "Pay back in fiat or crypto with 0% conversion fees",
      "Lots of perks and cashback (TBA)"
    ];
  
    const metalTerms = ["Anything here"];

    const minWidth = '320px';
    
    return (
      <>
      <Box maxW="960px" margin="0 auto">

        <Flex 
          flexWrap="wrap" 
          justify="center"
          justifyItems="center"
          gap={4}
        >
          <ProductCard
            minW={minWidth}
            flex="1"
            title="Best seller"
            price="15"
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
  