import {
  Container,
  HStack,
  Text,
  Heading,
  Button,
  SimpleGrid,
  VStack,
  Box,
} from "@chakra-ui/react"
import NextLink from "next/link"
import Image from "next/image"
import Link from "next/link"
import { productsData } from "@app/app/lib/static-data/home/produits"

const ProduitsView = () => {
  return (
    <Container maxW="container.xl" mt="28">
      <HStack justify="space-between" align="center">
        <Heading textTransform="uppercase" size="xl" letterSpacing="1px">
          Nos produits disponibles
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
        {productsData
          .slice(0, 4)
          .map(({ id, imageProduct, nomMateriel, icon }) => (
            <VStack key={id} align="start" spacing="5">
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
                  src={imageProduct}
                  fill
                  alt={nomMateriel}
                  placeholder="blur"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.2s",
                  }}
                  priority
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)"
                  }}
                />
              </Box>
              <HStack justify="space-between" align="center" w="full">
                <Text fontWeight="900" letterSpacing="1px">
                  {nomMateriel}
                </Text>
                <Link href="/products" legacyBehavior>
                  <Image src={icon} alt="" />
                </Link>
              </HStack>
            </VStack>
          ))}
      </SimpleGrid>
    </Container>
  )
}

export default ProduitsView
