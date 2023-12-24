"use client";

import Layout from "@app/app/layout/layout.page";
import { blogData } from "@app/app/lib/static-data/pages/blog";
import { Container, Grid, GridItem, Box, Image, Text } from "@chakra-ui/react";

export default function News() {
  return (
    <Layout title="Blog">
      <Container maxW="container.lg" my="20">
        <Grid
          templateRows="repeat(6, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={6}
          h="100%"
        >
          {blogData.map((blog, index) => (
            <GridItem
              key={index}
              colSpan={index === 0 ? 3 : 1}
              rowSpan={2}
              bg={index % 2 === 0 ? "tomato" : "papayawhip"}
              p="5"
            >
              {/* <Image
                src={blog.image}
                alt={blog.title}
                w="100%"
                h="100%"
                objectFit="cover"
              /> */}
              <Text fontSize="xl" fontWeight="bold">
                {blog.title}
              </Text>
              <Text fontSize="sm">{blog.description}</Text>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}
