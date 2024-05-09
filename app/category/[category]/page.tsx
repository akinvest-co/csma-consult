import Layout from "@app/app/layout/layout.page"
import { getArticles } from "@app/app/lib/api/blog/blog"
import { getCategory } from "@app/app/lib/api/blog/categories"
import { Articles } from "@app/app/types/blog.types"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react"
import Image from "next/image"

export default async function CategoryPage({
  params,
}: {
  params: { category: string }
}) {
  const { data: articles } = await getArticles()

  const category = await getCategory(params.category)

  const filteredArticles = articles.filter((article: Articles) => {
    return (
      article.attributes.blog_category.data.attributes.name ===
      category.data.attributes.name
    )
  })

  return (
    <Layout>
      <Container maxW="container.lg" my="20">
        <Breadcrumb color="rgba(89 106 149)" fontSize="md" my="20">
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <span>{category.data.attributes.name}</span>
          </BreadcrumbItem>
        </Breadcrumb>

        <SimpleGrid columns={3}>
          {filteredArticles.map((article: Articles) => (
            <VStack align="start" spacing="6" key={article.id}>
              <Image
                src={article.attributes.image.data.attributes.url}
                width={article.attributes.image.data.attributes.width}
                height={article.attributes.image.data.attributes.height}
                alt={article.attributes.title}
                style={{ borderRadius: "5px", overflow: "hidden" }}
              />
              <Heading fontSize="xl" lineHeight="short" noOfLines={2}>
                {article.attributes.title}
              </Heading>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
