import Layout from "@app/app/layout/layout.page"
import { getArticles } from "@app/app/lib/api/blog"
import { Articles } from "@app/app/types/blog.types"
import { Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import BlogView from "./blog.view"

export default async function BlogList() {
  const { data: articles } = await getArticles()
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
      </Flex>

      <Container maxW="container.xl" my="20">
        <SimpleGrid columns={{ sm: 2, md: 2, lg: 3 }} gap="10">
          {sortedArticles.map((article: Articles) => (
            <BlogView key={article.id} article={article} />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
