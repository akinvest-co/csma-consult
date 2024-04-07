import Layout from "@app/app/layout/layout.page"
import { getProduct } from "@app/app/lib/api/products"
import { Box, Container, HStack, SimpleGrid, Heading } from "@chakra-ui/react"
import Image from "next/image"

export default async function product({
  params,
}: {
  params: { productId: number }
}) {
  const { data: product } = await getProduct(params.productId)

  return (
    <Layout>
      <Container maxW="container.lg" py="20">
        <SimpleGrid columns={2}>
          <Box
            borderRadius="xl"
            overflow="hidden"
            height="400px"
            w="80%"
            position="relative"
          >
            <Image
              src={product.attributes.image.data.attributes.url}
              alt=""
              fill
              priority
            />
          </Box>
          <Box>
            <Heading>{product.attributes.name}</Heading>
          </Box>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
