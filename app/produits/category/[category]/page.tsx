import { Metadata, ResolvingMetadata } from "next"
import Layout from "@app/app/layout/layout.page"
import { getCategory } from "@app/app/lib/api/products/categories"
import { getProducts } from "@app/app/lib/api/products/products"
import { ProductCategory, Products } from "@app/app/types/products.types"

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
  Button,
} from "@chakra-ui/react"
import Image from "next/image"
import NextLink from "next/link"
import { getCategories } from "@app/app/lib/api/products/categories"
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
  const { data: products } = await getProducts()
  const { data: category } = await getCategory(params.category)
  const { data: categories } = await getCategories()
  const filteredProducts = products.filter((product: Products) => {
    return (
      product.attributes.product_categories.data[0].attributes.slug ===
      category.attributes.slug
    )
  })

  return (
    <Layout>
      <Container maxW="container.lg" my="20">
        <Breadcrumb color="rgba(89 106 149)" fontSize="md" mt="20">
          <BreadcrumbItem>
            <BreadcrumbLink href="/produits">Produits</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>Category</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <span>{category.attributes.name}</span>
          </BreadcrumbItem>
        </Breadcrumb>
        <HStack
          justify={{ base: "flex-start", md: "center" }}
          wrap="wrap"
          my="20"
        >
          {categories.map((category: ProductCategory) => (
            <Button
              as={Link}
              href={`/produits/category/${category.attributes.slug}`}
              key={category.id}
              variant="outline"
              _hover={{
                bgColor: "#e1f2fd",
                color: "#0b6999",
                textDecor: "none",
              }}
              letterSpacing="1px"
              textTransform="uppercase"
              fontSize={{ base: "0.6rem", md: "0.7rem" }}
            >
              {category.attributes.name}
            </Button>
          ))}
        </HStack>
        <Heading textAlign="center" my="20">
          {category.attributes.name}
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="10">
          {filteredProducts.map((product: Products) => (
            <VStack align="start" spacing="6" key={product.id}>
              <Link href={`/produits/${product.attributes.slug}`}>
                <Image
                  src={product.attributes.image.data[0].attributes.url}
                  width={product.attributes.image.data[0].attributes.width}
                  height={product.attributes.image.data[0].attributes.height}
                  alt={product.attributes.name}
                  style={{ borderRadius: "5px", overflow: "hidden" }}
                />
              </Link>
              <HStack
                alignItems="center"
                justifyContent="space-between"
                w="100%"
              >
                <Link
                  href={`/produits/category/${product.attributes.product_categories.data[0].attributes.slug}`}
                  _hover={{ textDecor: "none" }}
                  fontSize="small"
                  bgColor="#e1f2fd"
                  py="1"
                  px="2"
                  borderRadius="md"
                  color="#0b6999"
                >
                  {
                    product.attributes.product_categories.data[0].attributes
                      .name
                  }
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
