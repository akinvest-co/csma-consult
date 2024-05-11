import ProduitsView from "./produits.view"
import {
  ProductCategory,
  ProductSubCategory,
  Products,
} from "@app/app/types/products.types"
import Layout from "@app/app/layout/layout.page"
import { Box, Container, Heading, Select, SimpleGrid } from "@chakra-ui/react"
import { getProducts } from "@app/app/lib/api/products/products"
import {
  getCategories,
  getSubCategories,
} from "@app/app/lib/api/products/categories"

export default async function Products() {
  const { data: products } = await getProducts()
  const { data: categories } = await getCategories()
  const { data: subCategories } = await getSubCategories()

  console.log(
    products.map(
      (pr: Products) => pr.attributes.sub_categorie.data.attributes.name,
    ),
  )

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
            {categories.map((category: Products) => (
              <Select key={category.id} size="sm" borderRadius="xl" bg="white">
                <option>{category.attributes.name}</option>
                {/* {category.attributes} */}

                {/* {category.attributes.subCategory.data.map((subcategory: any) => (
                  <option key={subcategory.id} value={subcategory.id}>
                    {subcategory.attributes.name}
                  </option>
                ))} */}
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
