import Layout from "@app/app/layout/layout.page"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react"
import Image from "next/image"
import NextLink from "next/link"
import { getArticle } from "@app/app/lib/api/blog/blog"

export default async function article({
  params,
}: {
  params: { slug: string }
}) {
  const { data: article } = await getArticle(params.slug)
  console.log(article)

  return (
    <Layout>
      <Container maxW="container.lg" py="20">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              {article.attributes.blog_category.data.attributes.name}
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{article.attributes.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <VStack align="start" spacing="8">
          <Heading lineHeight="shorter"></Heading>
          <HStack>
            <Text>{article.attributes.title}</Text>
            <Text
              color="grey"
              suppressHydrationWarning
              fontSize=".875rem"
            ></Text>
          </HStack>

          <Box
            position="relative"
            borderRadius="xl"
            overflow="hidden"
            // bgImage={`url(${imageUrl})`}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPos="center"
            w="100%"
            h={{ base: "200px", md: "350px" }}
          >
            Image
          </Box>
        </VStack>
        {/* <Prose>
          <Box>{documentToReactComponents(content)}</Box>
        </Prose> */}
      </Container>
    </Layout>
  )
}
