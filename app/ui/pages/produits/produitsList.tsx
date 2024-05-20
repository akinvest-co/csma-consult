import ProduitsView from "./produits.view"
import { ProductCategory, Products } from "@app/app/types/products.types"
import Layout from "@app/app/layout/layout.page"
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Link,
  Grid,
  HStack,
} from "@chakra-ui/react"
import { getProducts } from "@app/app/lib/api/products/products"
import { getCategories } from "@app/app/lib/api/blog/categories"

export default async function Products() {
  const { data: products } = await getProducts()
  const { data: categories } = await getCategories()

  return (
    <Layout>
      <Container maxW="container.xl" mt="10">
        <Box>
          <Heading size="2xl">Solutions Matérielles</Heading>
        </Box>
      </Container>
      <Box bgColor="#1799cf" py="10" mt="10">
        <Container maxW="container.xl">
          <Heading fontSize="2xl" mb="7" color="white">
            Par Catégories
          </Heading>
          <HStack justify="space-between">
            {categories.map((category: ProductCategory) => (
              <Link
                href={`/produits/category/${category.attributes.slug}`}
                key={category.id}
                _hover={{ textDecor: "none" }}
                style={{ color: "white" }}
              >
                {category.attributes.name}
              </Link>
            ))}
          </HStack>
        </Container>
      </Box>
      <Container maxW="container.xl" my="20">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }}>
          {products.slice(0, 8).map((product: Products, index: number) => (
            <ProduitsView key={product.id} product={product} index={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
