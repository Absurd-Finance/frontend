"use client";

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

import { CardItem } from "./CardItem";

export default function Page() {
  return (
    <>
      <Box p={6}>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
          mt={6}
        >
          <GridItem rowSpan={2} colSpan={3}>
            <Card align="center" boxShadow="md">
              <CardHeader>
                <Heading size="md">Portfolio</Heading>
              </CardHeader>
              <CardBody></CardBody>
            </Card>
          </GridItem>
          <GridItem colSpan={1}>
            <CardItem title="aaa" body="aaa" />
          </GridItem>
          <GridItem colSpan={1}>
            <CardItem title="aaa" body="aaa" />
          </GridItem>
          <GridItem colSpan={1}>
            <CardItem title="aaa" body="aaa" />
          </GridItem>
          <GridItem colSpan={1}>
            <CardItem title="aaa" body="aaa" />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
