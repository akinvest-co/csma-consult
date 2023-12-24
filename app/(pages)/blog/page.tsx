"use client";

import Layout from "@app/app/layout/layout.page";
import { blogData } from "@app/app/lib/static-data/pages/blog";
import {
  Container,
  Grid,
  GridItem,
  Text,
  HStack,
  VStack,
  Box,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import Image from "next/image";

export default function News() {
  return (
    <Layout title="Blog">
      <Container maxW="container.lg" mt="10" mb="20">
        <VStack align="start" mb="10">
          <Heading>Actualités et Mises à Jour</Heading>
          <Text>
            Trouvez l'inspiration et trouvez le produit parfait pour accompagner
            votre quotidien.
          </Text>
        </VStack>

        <SimpleGrid columns={{ sm: 2, md: 3 }} spacing="40px">
          {blogData.map((blog, index) => (
            <Box key={index}>
              <Image
                src={blog.image}
                alt={blog.title}
                objectFit="cover"
                style={{ borderRadius: "5px", overflow: "hidden" }}
              />
              <VStack spacing="4" mt="4">
                <Text fontSize="lg" fontWeight="bold" noOfLines={2}>
                  {blog.title}
                </Text>
                <Text fontSize="sm" noOfLines={2}>
                  {blog.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
