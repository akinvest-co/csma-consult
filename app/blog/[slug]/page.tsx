import Layout from "@app/app/layout/layout.page"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"
import Image from "next/image"
import { getArticle } from "@app/app/lib/api/blog/blog"
import Link from "next/link"

export default async function article({
  params,
}: {
  params: { slug: string }
}) {
  const { data: article } = await getArticle(params.slug)

  return (
    <Layout>
      <Container maxW="container.lg" py="20">
        <Breadcrumb color="rgba(89 106 149)" fontSize="md">
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink
              href={`/category/${article.attributes.blog_category.data.attributes.slug}`}
            >
              {article.attributes.blog_category.data.attributes.name}
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <span>{article.attributes.title}</span>
          </BreadcrumbItem>
        </Breadcrumb>

        <SimpleGrid
          my="20"
          columns={{ md: 1, lg: 2 }}
          alignItems="center"
          gap="20"
        >
          <VStack align="start" spacing="6">
            <Link
              href={`/category/${article.attributes.blog_category.data.attributes.slug}`}
            >
              <Text
                fontSize="small"
                bgColor="#e1f2fd"
                py="1"
                px="2"
                borderRadius="md"
                color="#0b6999"
              >
                {article.attributes.blog_category.data.attributes.name}
              </Text>
            </Link>
            <Heading
              fontSize={{ base: "2.25rem", md: "2.9rem" }}
              lineHeight={{ base: "2.75rem", md: "3.625rem" }}
              letterSpacing="-.02em"
            >
              {article.attributes.title}
            </Heading>
          </VStack>

          <Image
            src={article.attributes.image.data.attributes.url}
            width={article.attributes.image.data.attributes.width}
            height={article.attributes.image.data.attributes.height}
            alt={article.attributes.title}
            style={{ borderRadius: "10px" }}
          />
        </SimpleGrid>

        <Container>
          <BlocksRenderer content={article.attributes.body} />
        </Container>
      </Container>
    </Layout>
  )
}
