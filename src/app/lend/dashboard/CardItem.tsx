import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

export function CardItem({ title, body }: { title: string; body: string }) {
  return (
    <GridItem colSpan={1}>
      <Card align="center" boxShadow="md">
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{body}</Text>
        </CardBody>
      </Card>
    </GridItem>
  );
}
