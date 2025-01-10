import {
  Container,
  HStack,
  Heading,
  Button,
  SimpleGrid,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { getProducts } from "@app/app/lib/api/products/products"
import { Products } from "@app/app/types/products.types"
import ProduitsHomeView from "./produits.view"

export default async function ProduitsList() {
  const { data: products } = await getProducts()

  return (
    <Container maxW="container.xl" my="28">
      <HStack justify="space-between" align="center">
        <Heading textTransform="uppercase" size="xl" letterSpacing="1px">
          Nos produits 
        </Heading>

        <Button
          textTransform="uppercase"
          display={{ base: "none", md: "inherit" }}
          href="/produits"
          as={NextLink}
          fontWeight="600"
          bg="#1799cf"
          _hover={{ bg: "#0c84bd" }}
          color="#fff"
          fontSize="1rem"
        >
          Tous les produits
        </Button>
      </HStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} mt="10" spacing="10">
        {products.slice(0, 4).map((product: Products) => (
          <ProduitsHomeView key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Container>
  )
}
