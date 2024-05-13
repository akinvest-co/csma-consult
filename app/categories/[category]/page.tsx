import Layout from "@app/app/layout/layout.page"
import { getProduct, getProducts } from "@app/app/lib/api/products/products"
import { Products } from "@app/app/types/products.types"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Link,
  HStack,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react"
import Image from "next/image"
import NextLink from "next/link"

export default async function CategoryPage({
  params,
}: {
  params: { category: string }
}) {
  const { data: products } = await getProducts()

  const category = await getProduct(params.category)

  const filteredProducts = products.filter((product: Products) => {
    return (
      product.attributes.category.data.attributes.name ===
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

          <BreadcrumbItem isCurrentPage>
            <span>{category.data.attributes.name}</span>
          </BreadcrumbItem>
        </Breadcrumb>

        <Heading textAlign="center" my="20">
          {category.data.attributes.name}
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="10">
          {filteredProducts.map((product: Products) => (
            <VStack align="start" spacing="6" key={product.id}>
              <Image
                src={product.attributes.image.data.attributes.url}
                width={product.attributes.image.data.attributes.width}
                height={product.attributes.image.data.attributes.height}
                alt={product.attributes.name}
                style={{ borderRadius: "5px", overflow: "hidden" }}
              />
              <HStack
                alignItems="center"
                justifyContent="space-between"
                w="100%"
              >
                <Link
                  href={`/categories/${product.attributes.category.data.attributes.slug}`}
                  _hover={{ textDecor: "none" }}
                  fontSize="small"
                  bgColor="#e1f2fd"
                  py="1"
                  px="2"
                  borderRadius="md"
                  color="#0b6999"
                >
                  {product.attributes.category.data.attributes.name}
                </Link>
              </HStack>

              <NextLink href={`/produits/${product.attributes.slug}`}>
                <Heading fontSize="xl" lineHeight="short" noOfLines={2}>
                  {product.attributes.name}
                </Heading>
              </NextLink>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
