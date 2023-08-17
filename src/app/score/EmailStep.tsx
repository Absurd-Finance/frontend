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
    Flex,
  } from "@chakra-ui/react";
  import { FiCheck, FiArrowRight } from "react-icons/fi";

  export function EmailStep() {

    const cardWidth = useBreakpointValue({ base: "100%", md: "15rem", lg: "30rem" });
    
    return (
        <>
        <Box margin="0 auto">
  
          <Flex 
            flexWrap="wrap" 
            justify="center"
            justifyItems="center"
            gap={4}
          >
      <Card 
            width={cardWidth}
            bg="gray.100"
            boxShadow="lg"
            borderRadius="md"
            p={6}
        >
        <CardBody>
          <Stack spacing={4}>
            <Text fontSize="xl" fontWeight="bold">
              Join the Early Beta  
            </Text>
            <Text>We start shipping this fall. Leave your details to get notified when to order. </Text>
            
            <FormControl>
              <FormLabel htmlFor="email">Email or Telegram</FormLabel>
              <Input 
                id="email" 
                type="email"     
                bg="white"
            />
            </FormControl>
          </Stack>
        </CardBody>
        
        <CardFooter>
           <Button colorScheme="blue">Submit</Button>
        </CardFooter>
      </Card>
      </Flex>
      </Box>
      </>
    );
  };
  