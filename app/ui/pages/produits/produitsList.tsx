import ProduitsView from "./produits.view"
import { ProductCategory, Products } from "@app/app/types/products.types"
import Layout from "@app/app/layout/layout.page"
import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Link,
  SimpleGrid,
} from "@chakra-ui/react"
import { getProducts } from "@app/app/lib/api/products/products"
import SearchInput from "../search/search"
import { getCategories } from "@app/app/lib/api/products/categories"

export default async function Products({ query }: { query: string }) {
  const { data: products } = await getProducts()
  const { data: categories } = await getCategories()

  const filteredProducts = products.filter((product: Products) =>
    product.attributes.name.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <Layout>
      <Container maxW="container.xl" my="10">
        <Flex
          align={{ base: "center", md: "center", lg: "center" }}
          justify="space-between"
          px="1.5rem"
          my="10"
          flexDir={{ base: "column", md: "column", lg: "row" }}
        >
          <Box>
            <Heading size="xl" mb={{ base: "20px", md: "20px", lg: 0 }}>
              Solutions Matérielles
            </Heading>
          </Box>
          <Box pos="relative">
            <SearchInput
              placeholder="Chercher un produit"
              width={{ base: "100%", md: "100%", lg: "400px" }}
            />
          </Box>
        </Flex>

        {/* <Box bgColor="#1799cf" py="10" mt="10">
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
      </Box> */}

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }}>
          {filteredProducts
            .slice(0, 8)
            .map((product: Products, index: number) => (
              <ProduitsView key={product.id} product={product} index={index} />
            ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
