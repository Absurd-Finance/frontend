import {
<<<<<<< HEAD
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
  Flex,
  Select,
} from "@chakra-ui/react";
import { FiCheck, FiArrowRight } from "react-icons/fi";

export function EmailStep() {
   const cardWidth = useBreakpointValue({ base: "100%", md: "15rem", lg: "30rem" });
  
   return (
    <>
      <Box margin="0 auto" p={{ base: 1, md: 2 }}>
        <Flex flexWrap="wrap" justify="center" justifyItems="center" gap={4}>
          <Card width={cardWidth} bg="gray.100" boxShadow="lg" borderRadius="md" p={6}>
            <CardBody>
              <Stack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Join the Early Beta
                </Text>
                <Text>We start shipping this fall. Leave your details to get notified when to order.</Text>

                <FormControl>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input id="name" type="text" bg="white" />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="email">Email or Telegram</FormLabel>
                  <Input id="email" type="email" bg="white" />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="country">Country</FormLabel>
                  <Select id="country" bg="white">
                    {/* Add coutries */}
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="IN">India</option>
                    {/* Add coutries */}
                  </Select>
                </FormControl>
              </Stack>
            </CardBody>

            <CardFooter>
              <Flex>
                <Button colorScheme="blue">Submit</Button>
              </Flex>              
            </CardFooter>
          </Card>
        </Flex>
      </Box>
    </>
  );
};
=======
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
    Flex,
    Select,
  } from "@chakra-ui/react";
  import { FiCheck, FiArrowRight } from "react-icons/fi";

  export function EmailStep() {
     const cardWidth = useBreakpointValue({ base: "100%", md: "15rem", lg: "30rem" });
    
     return (
      <>
        <Box margin="0 auto" p={{ base: 1, md: 2 }}>
          <Flex flexWrap="wrap" justify="center" justifyItems="center" gap={4}>
            <Card width={cardWidth} bg="gray.100" boxShadow="lg" borderRadius="md" p={6}>
              <CardBody>
                <Stack spacing={4}>
                  <Text fontSize="xl" fontWeight="bold">
                    Join the Early Beta
                  </Text>
                  <Text>We start shipping this fall. Leave your details to get notified when to order.</Text>
  
                  <FormControl>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input id="name" type="text" bg="white" />
                  </FormControl>
  
                  <FormControl>
                    <FormLabel htmlFor="email">Email or Telegram</FormLabel>
                    <Input id="email" type="email" bg="white" />
                  </FormControl>
  
                  <FormControl>
                    <FormLabel htmlFor="country">Country</FormLabel>
                    <Select id="country" bg="white">
                      {/* Add country list */}
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="IN">India</option>
                      {/* Add country list */}
                    </Select>
                  </FormControl>
                </Stack>
              </CardBody>
  
              <CardFooter>
                <Flex>
                  <Button colorScheme="blue">Submit</Button>
                </Flex>              
              </CardFooter>
            </Card>
          </Flex>
        </Box>
      </>
    );
  };

  
>>>>>>> 319cc48 (EmailStep changes, copy and PostHog integration)
