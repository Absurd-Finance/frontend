import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

export const CardTierStep = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SimpleGrid
        mt="5"
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <Card>
          <CardHeader>
            <Heading size="md">Standard</Heading>
          </CardHeader>
          <CardBody>
            <Stack>
              <Text
                color={useColorModeValue("blue.500", "blue.200")}
                fontWeight="extrabold"
                fontSize={{ base: "xl", md: "2xl" }}
                textTransform="uppercase"
              >
                5&euro;/mo
              </Text>
              <HStack spacing="4">
                <AvatarGroup
                  size="sm"
                  max={useBreakpointValue({ base: 2, lg: 5 })}
                  borderColor="fg.accent.default"
                >
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                  <Avatar
                    name="Christian Nwamba"
                    src="https://bit.ly/code-beast"
                  />
                </AvatarGroup>
              </HStack>
              <Text fontWeight="medium">Join 10.000+ users</Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button onClick={onOpen}>Order Now</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Metal</Heading>
          </CardHeader>
          <CardBody>
            <Text
              color={useColorModeValue("blue.500", "blue.200")}
              fontWeight="extrabold"
              fontSize={{ base: "xl", md: "2xl" }}
              textTransform="uppercase"
            >
              15&euro;/mo
            </Text>
          </CardBody>
          <CardFooter>
            <Button onClick={onOpen}>Order Now</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Coming soon next fall</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Reserve your spot in the waiting list</FormLabel>
              <Input type="text" placeholder="telegram or email" />
            </FormControl>
            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
