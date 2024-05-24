import { Text, VStack, Box, Link } from "@chakra-ui/react"
import Image from "next/image"
import { Products } from "@app/app/types/products.types"

export default function ProduitsHomeView({ product }: { product: Products }) {
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
        <Link href={`/produits/${product.attributes.slug}`}>
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
        </Link>
      </Box>

      <Link
        href={`/produits/${product.attributes.slug}`}
        _hover={{ textDecor: "none" }}
      >
        <Text fontWeight="900" letterSpacing="1px">
          {product.attributes.name}
        </Text>
      </Link>
    </VStack>
  )
}
