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
  Select,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

export function EmailStep() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [zone, setZone] = useState<string>("");
  const cardWidth = useBreakpointValue({
    base: "100%",
    md: "15rem",
    lg: "30rem",
  });
  const toast = useToast();

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("https://formbold.com/s/6vx8D", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, zone }),
    });

    if (!response.ok) {
      toast({
        title: "Error",
        description: "Please retry",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: "You just reserved a spot in Absurd waiting list!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box margin="0 auto" p={{ base: 1, md: 2 }}>
        <Flex flexWrap="wrap" justify="center" justifyItems="center" gap={4}>
          <Card
            width={cardWidth}
            bg="gray.100"
            boxShadow="lg"
            borderRadius="md"
            p={6}
          >
            <form onSubmit={handleForm}>
              <CardBody>
                <Stack spacing={4}>
                  <Text fontSize="xl" fontWeight="bold">
                    Join the waiting list
                  </Text>
                  <Text>
                    We start shipping this fall. Leave your details to get
                    notified when to order.
                  </Text>

                  <FormControl>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input
                      id="name"
                      type="text"
                      bg="white"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor="email">Email or Telegram</FormLabel>
                    <Input
                      id="email"
                      type="text"
                      bg="white"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor="zone">Geographical Zone</FormLabel>
                    <Select
                      id="zone"
                      bg="white"
                      value={zone}
                      onChange={(event) => setZone(event.target.value)}
                      required
                    >
                      <option selected>Choose...</option>
                      <option value="EEA">Europe</option>
                      <option value="NA">North America</option>
                      <option value="LATAM">Latam</option>
                      <option value="APAC">Asia-Pacific</option>
                      <option value="AFRICA">Africa</option>
                    </Select>
                  </FormControl>
                </Stack>
              </CardBody>

              <CardFooter>
                <Flex>
                  <Button colorScheme="blue" type="submit">
                    Submit
                  </Button>
                </Flex>
              </CardFooter>
            </form>
          </Card>
        </Flex>
      </Box>
    </>
  );
}
