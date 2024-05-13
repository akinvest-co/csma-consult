import ProduitsView from "./produits.view"
import { Products, categoryProduct } from "@app/app/types/products.types"
import Layout from "@app/app/layout/layout.page"
import {
  Box,
  Container,
  Heading,
  Select,
  SimpleGrid,
  Link,
} from "@chakra-ui/react"
import { getProducts } from "@app/app/lib/api/products/products"
import { getCategories } from "@app/app/lib/api/products/categories"

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
          <SimpleGrid
            columns={{ base: 2, md: 3 }}
            spacing={{ base: "5", md: "10" }}
            justifyContent="center"
          >
            {categories.map((category: categoryProduct) => (
              <Select key={category.id} size="sm" borderRadius="xl" bg="white">
                <option style={{ cursor: "pointer" }}>
                  <Link href={`/categories/${category.attributes.slug}`}>
                    {category.attributes.name}
                  </Link>
                </option>

                {category.attributes.sub_categories.data.map((subcategory) => (
                  <option
                    key={subcategory.id}
                    value={subcategory.id}
                    style={{ cursor: "pointer" }}
                  >
                    <Link href={`/categories/${category.attributes.slug}`}>
                      {subcategory.attributes.name}
                    </Link>
                  </option>
                ))}
              </Select>
            ))}
          </SimpleGrid>
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
