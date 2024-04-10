import { getProducts } from "@app/app/lib/api/products"
import { ProductsProps } from "@app/app/types/products.types"
import ProduitsView from "./produits.view"
import { SimpleGrid } from "@chakra-ui/react"

export default async function Products() {
  const { data: products } = await getProducts()

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }}>
      {products.slice(0, 8).map((product: ProductsProps, index: number) => (
        <ProduitsView key={product.id} product={product} index={index} />
      ))}
    </SimpleGrid>
  )
}
