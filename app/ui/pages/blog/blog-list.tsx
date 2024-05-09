import { getCategories } from "@app/app/lib/api/blog/categories"
import { getArticles } from "@app/app/lib/api/blog/blog"
import { Articles, BlogCategory } from "@app/app/types/blog.types"

import {
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
      article.attributes.blog_category.data.attributes.name
        .toLowerCase()
        .includes(query.toLowerCase()),
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

        <SearchInput placeholder="Chercher un article, catégorie" />
      </Flex>

      <Container maxW="container.xl" my="20">
        {/* <HStack
          mb={{ base: "10", md: "20" }}
          spacing={{ base: "2", md: "8" }}
          justify={{ base: "flex-start", md: "center" }}
          flexWrap="wrap"
        >
          {categories.map((category: BlogCategory, index: number) => (
            <Link
              key={index}
              href={`/search/${category.id}`}
              style={{ fontSize: "0.8rem", textTransform: "uppercase" }}
            >
              {category.attributes.name}
            </Link>
          ))}
        </HStack> */}

        <SimpleGrid columns={{ sm: 2, md: 2, lg: 3 }} gap="10">
          {filteredArticles.map((article: Articles) => (
            <BlogView key={article.id} article={article} />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
