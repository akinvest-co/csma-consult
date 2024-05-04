// "use client"

import Layout from "@app/app/layout/layout.page"
import { getArticles } from "@app/app/lib/api/blog"
// import { blogData } from "@app/app/lib/static-data/pages/blog"
// import { BlogItem } from "@app/app/lib/static-data/pages/blog/definitions"
import { Articles } from "@app/app/types/blog.types"
import { Link } from "@chakra-ui/next-js"
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
} from "@chakra-ui/react"
import Image from "next/image"
import { Search } from "tabler-icons-react"

export default async function BlogList() {
  const { data: articles } = await getArticles()

  return (
    <Layout>
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
        {/* <Box position="absolute" bottom="-20px">
          <Input
            placeholder="Cherchez un produit, catégorie..."
            bgColor="white"
            borderRadius="xl"
            focusBorderColor="#1799cf"
            p="6"
            w={{ base: "100%", md: "400px" }}
            pl="12"
            zIndex="2"
            style={{ borderLeft: "none" }}
            onChange={(e) => {
              handleSearch(e.target.value)
            }}
            defaultValue={searchTerm}
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
        </Box> */}
      </Flex>

      <Container maxW="container.lg" my="20">
        {/* <HStack
          mb={{ base: "10", md: "20" }}
          spacing={{ base: "2", md: "8" }}
          justify={{ base: "flex-start", md: "center" }}
          flexWrap="wrap"
        >
          {blogData.slice(0, 5).map((blog: BlogItem, index: number) => (
            <Button
              key={index}
              variant={blog.category === selectedCategory ? "solid" : "outline"}
              bgColor={blog.category === selectedCategory ? "#e1f2fd" : "white"}
              color={blog.category === selectedCategory ? "#0b6999" : "normal"}
              _hover={{ bgColor: "#e1f2fd", color: "#0b6999" }}
              onClick={() => handleCategoryClick(blog.category)}
              letterSpacing="1px"
              textTransform="uppercase"
              fontSize={{ base: "0.6rem", md: "0.9rem" }}
              py={{ base: "0.5rem", md: "1rem" }}
              px={{ base: "0.5rem", md: "1rem" }}
            >
              {blog.category}
            </Button>
          ))}
        </HStack> */}

        <SimpleGrid columns={{ sm: 2, md: 2, lg: 3 }} spacing="40px">
          {articles.map((article: Articles) => (
            <Box
              key={article.id}
              padding="20px"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="rgb(145 158 171 / 24%) 0px 0px 2px 0px,rgb(145 158 171 / 24%) 0px 16px 32px -4px"
            >
              <Image
                src={article.attributes.image.data.attributes.url}
                alt={article.attributes.title}
                objectFit="cover"
                style={{
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
                placeholder="blur"
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
                    {article.attributes.blog_categories.data.attributes.name}
                  </Text>
                  <Text fontSize="small" color="hsl(0, 0%, 50%)">
                    {article.attributes.date}
                  </Text>
                </HStack>
                <Link href={`article/${article.attributes.title}`}>
                  <Heading fontSize="lg" lineHeight="short" noOfLines={2}>
                    {article.attributes.title}
                  </Heading>
                </Link>
                <Text fontSize="sm" noOfLines={2} color="hsl(0, 0%, 50%)">
                  {article.attributes.body}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
