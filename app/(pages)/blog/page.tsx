"use client";

import Layout from "@app/app/layout/layout.page";
import { Container, Grid, GridItem } from "@chakra-ui/react";

export default function News() {
  return (
    <Layout title="Blog">
      <Container maxW="container.xl" my="20">
        <Grid
          h="550px"
          templateRows="repeat(6, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
          borderRadius="xl"
          overflow="hidden"
        >
          <GridItem
            rowSpan={2}
            colSpan={3}
            bg="tomato"
            overflow="hidden"
            borderRadius="xl"
          />
          <GridItem
            colSpan={1}
            rowSpan={2}
            bg="papayawhip"
            overflow="hidden"
            borderRadius="xl"
          />
          <GridItem
            colSpan={1}
            rowSpan={2}
            bg="tomato"
            overflow="hidden"
            borderRadius="xl"
          />
          <GridItem
            colSpan={1}
            rowSpan={2}
            bg="papayawhip"
            overflow="hidden"
            borderRadius="xl"
          />
          <GridItem
            colSpan={1}
            rowSpan={2}
            bg="tomato"
            overflow="hidden"
            borderRadius="xl"
          />
          <GridItem
            colSpan={1}
            rowSpan={2}
            bg="papayawhip"
            overflow="hidden"
            borderRadius="xl"
          />
          <GridItem
            colSpan={1}
            rowSpan={2}
            bg="tomato"
            overflow="hidden"
            borderRadius="xl"
          />
        </Grid>
      </Container>
    </Layout>
  );
}
