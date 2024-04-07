import { Box } from "@chakra-ui/react"
import { getProduct } from "../lib/api/products"

async function getProductById(productId: number) {
  return await getProduct(productId)
}

export default async function product({
  params,
}: {
  params: { productId: number }
}) {
  const product = await getProductById(params.productId)

  return <Box>{product.attributes.name}</Box>
}
