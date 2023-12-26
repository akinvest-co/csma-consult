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
  Flex,
  Input,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

export default function News() {
  const [activeCategory, setActiveCategory] = useState("Catégorie 1");

  const handleCategoryClick = (category: any) => {
    setActiveCategory(category);
  };

  return (
    <Layout title="Blog">
      <Flex
        flexDirection="column"
        bgColor="#1799cf"
        py="8"
        position="relative"
        zIndex="1"
        alignItems="center"
      >
        <Flex flex="1" justifyContent="center" alignItems="center">
          <Heading color="white" mb="5">
            Actualités et Mises à Jour
          </Heading>
        </Flex>
        <Box position="absolute" bottom="-15px">
          <Input
            placeholder="produit, categorie,..."
            bgColor="white"
            borderRadius="xl"
            focusBorderColor="#1799cf"
            p="5"
            w="400px"
          />
        </Box>
      </Flex>

      <Container maxW="container.lg" my="20">
        <Flex mb="20" justifyContent="space-evenly">
          <Button
            variant="outline"
            letterSpacing="1px"
            textTransform="uppercase"
            bg={activeCategory === "Catégorie 1" ? "#1799cf" : "#fff"}
            color={activeCategory === "Catégorie 1" ? "#fff" : "#1799cf"}
            onClick={() => handleCategoryClick("Catégorie 1")}
            _hover={{ bg: "#0c84bd" }}
            fontSize="1rem"
            py="1rem"
            px="2rem"
          >
            Catégorie 1
          </Button>
          <Button
            variant="outline"
            letterSpacing="1px"
            textTransform="uppercase"
            bg={activeCategory === "Catégorie 1" ? "#1799cf" : "#fff"}
            color={activeCategory === "Catégorie 1" ? "#fff" : "#1799cf"}
            onClick={() => handleCategoryClick("Catégorie 2")}
            _hover={{ bg: "#0c84bd" }}
            fontSize="1rem"
            py="1rem"
            px="2rem"
          >
            Catégorie 2
          </Button>
          <Button
            variant="outline"
            letterSpacing="1px"
            textTransform="uppercase"
            bg={activeCategory === "Catégorie 1" ? "#1799cf" : "#fff"}
            color={activeCategory === "Catégorie 1" ? "#fff" : "#1799cf"}
            onClick={() => handleCategoryClick("Catégorie 3")}
            _hover={{ bg: "#0c84bd" }}
            fontSize="1rem"
            py="1rem"
            px="2rem"
          >
            Catégorie 3
          </Button>
        </Flex>
        <SimpleGrid columns={{ sm: 2, md: 3 }} spacing="40px">
          {blogData.map((blog, index) => (
            <Box
              key={index}
              padding="20px"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="rgb(145 158 171 / 24%) 0px 0px 2px 0px,rgb(145 158 171 / 24%) 0px 16px 32px -4px"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                objectFit="cover"
                style={{
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
              />
              <VStack spacing="4" mt="4" align="start">
                <Text fontSize="small">{blog.category}</Text>
                <Heading fontSize="lg" lineHeight="short" noOfLines={2}>
                  {blog.title}
                </Heading>
                <Text fontSize="sm" noOfLines={2} color="hsl(0, 0%, 50%)">
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
