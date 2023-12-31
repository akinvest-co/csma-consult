"use client";

import Layout from "@app/app/layout/layout.page";
import { blogData } from "@app/app/lib/static-data/pages/blog";
import {
  Container,
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
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "tabler-icons-react";

export default function News() {
  const searchPararms = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredData = blogData.filter((item) => {
    const titleMatch = item.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(
        searchTerm
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      );
    const categoryMatch = selectedCategory
      ? item.category === selectedCategory
      : true;

    return titleMatch && categoryMatch;
  });

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
    setSearchTerm("");
  };

  function handleSearch(term: string) {
    setSearchTerm(term);
    setSelectedCategory("");
    const params = new URLSearchParams(searchPararms);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Layout title="Blog">
      <Flex
        flexDirection="column"
        bgColor="#1799cf"
        py="8"
        position="relative"
        alignItems="center"
      >
        <Flex flex="1" justifyContent="center" alignItems="center">
          <Heading color="white" mb="5" textAlign="center">
            Actualités et Mises à Jour
          </Heading>
        </Flex>
        <Box position="absolute" bottom="-20px">
          <Input
            placeholder="Cherchez un produit..."
            bgColor="white"
            borderRadius="xl"
            focusBorderColor="#1799cf"
            p="6"
            w={{ base: "100%", md: "400px" }}
            pl="12"
            zIndex="2"
            style={{ borderLeft: "none" }}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSearch(e.target.value);
            }}
            defaultValue={searchPararms.get("query")?.toString()}
          />
          <Box
            position="absolute"
            top="50%"
            transform="translateY(-50%)"
            left="4"
            pointerEvents="none"
            zIndex="3"
          >
            <Search size={22} color="#A0AEC0" />
          </Box>
        </Box>
      </Flex>

      <Container maxW="container.lg" my="20">
        <HStack
          mb={{ base: "10", md: "20" }}
          spacing={{ base: "2", md: "8" }}
          justify={{ base: "flex-start", md: "center" }}
          flexWrap="wrap"
        >
          {blogData.slice(0, 5).map((blog, index) => (
            <Button
              key={index}
              variant={blog.category === selectedCategory ? "solid" : "outline"}
              bgColor={blog.category === selectedCategory ? "#e1f2fd" : "white"}
              color={blog.category === selectedCategory ? "#0b6999" : "normal"}
              _hover={{ bgColor: "#e1f2fd", color: "#0b6999" }}
              onClick={() => handleCategoryClick(blog.category)}
              letterSpacing="1px"
              textTransform="uppercase"
              fontSize="0.9rem"
              py="1rem"
              px="1rem"
            >
              {blog.category}
            </Button>
          ))}
        </HStack>
        <SimpleGrid columns={{ sm: 2, md: 2, lg: 3 }} spacing="40px">
          {filteredData.map((blog, index) => (
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
                <HStack
                  alignItems="center"
                  justifyContent="space-between"
                  w="100%"
                >
                  <Text
                    fontSize="small"
                    bgColor="#e1f2fd"
                    py="1"
                    px="2"
                    borderRadius="md"
                    color="#0b6999"
                  >
                    {blog.category}
                  </Text>
                  <Text fontSize="small" color="hsl(0, 0%, 50%)">
                    {blog.date}
                  </Text>
                </HStack>
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
