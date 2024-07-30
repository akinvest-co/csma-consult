import { Metadata, ResolvingMetadata } from "next"
import Layout from "@app/app/layout/layout.page"
import { getArticles } from "@app/app/lib/api/blog/blog"
import { getCategory } from "@app/app/lib/api/blog/categories"
import { Articles } from "@app/app/types/blog.types"
import { formatDate } from "@app/app/utils/utils"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Link,
  HStack,
  Heading,
  Text,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react"
import Image from "next/image"
import NextLink from "next/link"

type Props = {
  params: { category: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: product } = await getCategory(params.category)

  return {
    title: product.attributes.name,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string }
}) {
  const { data: articles } = await getArticles()

  const category = await getCategory(params.category)

  const filteredArticles = articles.filter((article: Articles) => {
    return (
      article.attributes.blog_categories.data[0].attributes.name ===
      category.data.attributes.name
    )
  })

  return (
    <Layout>
      <Container maxW="container.lg" my="20">
        <Breadcrumb color="rgba(89 106 149)" fontSize="md" mt="20">
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>Category</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <span>{category.data.attributes.name}</span>
          </BreadcrumbItem>
        </Breadcrumb>

        <Heading textAlign="center" my="20">
          {category.data.attributes.name}
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="10">
          {filteredArticles.map((article: Articles) => (
            <VStack align="start" spacing="6" key={article.id}>
              <Image
                src={article.attributes.image.data[0].attributes.url}
                width={article.attributes.image.data[0].attributes.width}
                height={article.attributes.image.data[0].attributes.height}
                alt={article.attributes.title}
                style={{ borderRadius: "5px", overflow: "hidden" }}
              />
              <HStack
                alignItems="center"
                justifyContent="space-between"
                w="100%"
              >
                <Link
                  href={`/category/${article.attributes.blog_categories.data[0].attributes.slug}`}
                  _hover={{ textDecor: "none" }}
                  fontSize="small"
                  bgColor="#e1f2fd"
                  py="1"
                  px="2"
                  borderRadius="md"
                  color="#0b6999"
                >
                  {article.attributes.blog_categories.data[0].attributes.name}
                </Link>

                <Text fontSize="small" color="hsl(0, 0%, 50%)">
                  {formatDate.format(new Date(article.attributes.date))}
                </Text>
              </HStack>

              <NextLink href={`/blog/${article.attributes.slug}`}>
                <Heading fontSize="xl" lineHeight="short" noOfLines={2}>
                  {article.attributes.title}
                </Heading>
              </NextLink>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
