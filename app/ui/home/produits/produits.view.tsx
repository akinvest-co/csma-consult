import { HStack, Text, VStack, Box } from "@chakra-ui/react"
import Image from "next/image"
import { Products } from "@app/app/types/products.types"

export default async function ProduitsHomeView({
  product,
}: {
  product: Products
}) {
  return (
    <VStack key={product.id} align="start" spacing="5">
      <Box
        borderRadius="xl"
        overflow="hidden"
        bgColor="#f5f6f6"
        position="relative"
        padding="5"
        h="250px"
        w="100%"
      >
        <Image
          src={product.attributes.image.data.attributes.url}
          fill
          alt={product.attributes.name}
          style={{
            objectFit: "cover",
            transition: "transform 0.2s",
          }}
          priority
        />
      </Box>
      <HStack justify="space-between" align="center" w="full">
        <Text fontWeight="900" letterSpacing="1px">
          {product.attributes.name}
        </Text>
      </HStack>
    </VStack>
  )
}
