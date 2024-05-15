import { Metadata, ResolvingMetadata } from "next"
import Layout from "@app/app/layout/layout.page"

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
import Link from "next/link"
import { getArticle } from "@app/app/lib/api/blog/blog"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: article } = await getArticle(params.slug)

  return {
    title: article.attributes.title,
  }
}

export default async function Article({
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

        <Container maxW="container.md">
          <BlocksRenderer content={article.attributes.body} />
        </Container>
      </Container>
    </Layout>
  )
}
