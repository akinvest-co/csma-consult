import { Search } from "tabler-icons-react"
import { getCategories } from "@app/app/lib/api/blog/categories"
import { getArticles } from "@app/app/lib/api/blog/blog"
import { Articles, BlogCategory } from "@app/app/types/blog.types"

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Input,
  SimpleGrid,
} from "@chakra-ui/react"
import BlogView from "./blog.view"
import Layout from "@app/app/layout/layout.page"

export default async function BlogList() {
  const { data: articles } = await getArticles()
  const { data: categories } = await getCategories()

  const sortedArticles = articles.sort(
    (prevArticle: Articles, nextArticle: Articles) =>
      new Date(nextArticle.attributes.date).getTime() -
      new Date(prevArticle.attributes.date).getTime(),
  )

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

        <Box position="absolute" bottom="-20px">
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
            // onChange={(e) => {
            //   handleSearch(e.target.value)
            // }}
            // defaultValue={searchTerm}
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
          {categories.map((category: BlogCategory, index: number) => (
            <Button
              key={index}
              // variant={blog.category === selectedCategory ? "solid" : "outline"}
              // bgColor={blog.category === selectedCategory ? "#e1f2fd" : "white"}
              // color={blog.category === selectedCategory ? "#0b6999" : "normal"}
              _hover={{ bgColor: "#e1f2fd", color: "#0b6999" }}
              // onClick={() => handleCategoryClick(blog.category)}
              letterSpacing="1px"
              textTransform="uppercase"
              fontSize={{ base: "0.6rem", md: "0.6rem" }}
              py={{ base: "0.5rem", md: "0.8rem" }}
              px={{ base: "0.5rem", md: "0.8rem" }}
            >
              {category.attributes.name}
            </Button>
          ))}
        </HStack>

        <SimpleGrid columns={{ sm: 2, md: 2, lg: 3 }} gap="10">
          {sortedArticles.map((article: Articles) => (
            <BlogView key={article.id} article={article} />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
