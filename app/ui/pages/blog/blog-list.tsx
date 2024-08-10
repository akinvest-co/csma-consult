import { getArticles } from "@app/app/lib/api/blog/blog"
import { Articles, BlogCategory } from "@app/app/types/blog.types"

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react"
import BlogView from "./blog.view"
import Layout from "@app/app/layout/layout.page"
import SearchInput from "../search/search"
import Link from "next/link"
import { getCategories } from "@app/app/lib/api/blog/categories"

export default async function BlogList({ query }: { query: string }) {
  const { data: articles } = await getArticles()
  const { data: categories } = await getCategories()

  const sortedArticles = articles.sort(
    (prevArticle: Articles, nextArticle: Articles) =>
      new Date(nextArticle.attributes.date).getTime() -
      new Date(prevArticle.attributes.date).getTime(),
  )

  const filteredArticles = sortedArticles.filter(
    (article: Articles) =>
      article.attributes.title.toLowerCase().includes(query.toLowerCase()) ||
      (article.attributes.blog_categories.data[0]?.attributes.name
        .toLowerCase()
        .includes(query.toLowerCase()) ??
        false),
  )

  return (
    <Layout>
      <Flex
        flexDirection="column"
        bgColor="#1799cf"
        py="12"
        position="relative"
        alignItems="center"
      >
        <Flex flex="1" justifyContent="center" alignItems="center">
          <Heading color="white" mb="5" textAlign="center">
            Actualités et Mises à Jour
          </Heading>
        </Flex>
        <Box position="absolute" bottom="-20px">
          <SearchInput
            placeholder="Chercher un article, catégorie"
            width={{ base: "100%", md: "400px", lg: "400px" }}
          />
        </Box>
      </Flex>

      <Container maxW="container.lg" my="20">
        <HStack justify={{ base: "flex-start", md: "center" }} wrap="wrap">
          {categories.map((category: BlogCategory) => (
            <Button
              key={category.id}
              as={Link}
              href={`/blog/category/${category.attributes.slug}`}
              variant="outline"
              _hover={{ bgColor: "#e1f2fd", color: "#0b6999" }}
              letterSpacing="1px"
              textTransform="uppercase"
              fontSize={{ base: "0.6rem", md: "0.7rem" }}
              py={{ base: "0.5rem", md: "1rem" }}
              px={{ base: "0.5rem", md: "1rem" }}
            >
              {category.attributes.name}
            </Button>
          ))}
        </HStack>
      </Container>

      <Container maxW="container.lg" my="20">
        <SimpleGrid columns={{ sm: 2, md: 2, lg: 3 }} gap="10">
          {filteredArticles.map((article: Articles) => (
            <BlogView key={article.id} article={article} />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
