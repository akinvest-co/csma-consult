import Layout from "@app/app/layout/layout.page"
import { getProducts } from "@app/app/lib/api/products"
import { Products } from "@app/app/types/products.types"
import icon from "public/images/shoppingicon.gif"

import {
  Container,
  Heading,
  Box,
  Select,
  SimpleGrid,
  HStack,
  Link,
  VStack,
  Text,
} from "@chakra-ui/react"
import Image from "next/image"

export default async function ProduitsView() {
  const { data: products } = await getProducts()

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
            columns={{ base: 2, md: 4 }}
            spacing={{ base: "5", md: "10" }}
          >
            <Select
              size="sm"
              borderRadius="xl"
              placeholder="CDE & Convertisseur"
              bg="white"
            >
              <option value="option1">Produits 1</option>
              <option value="option2">Produits 2</option>
              <option value="option3">Produits 3</option>
            </Select>
            <Select
              size="sm"
              borderRadius="xl"
              placeholder="Modules Optiques"
              bg="white"
            >
              <option value="option1">Produits 1</option>
              <option value="option2">Produits 2</option>
              <option value="option3">Produits 3</option>
            </Select>
            <Select
              size="sm"
              borderRadius="xl"
              placeholder="Jarretiers & DAAC/AOC"
              bg="white"
            >
              <option value="option1">Produits 1</option>
              <option value="option2">Produits 2</option>
              <option value="option3">Produits 3</option>
            </Select>
            <Select
              size="sm"
              borderRadius="xl"
              placeholder="XMUX & DEMUX"
              bg="white"
            >
              <option value="option1">Produits 1</option>
              <option value="option2">Produits 2</option>
              <option value="option3">Produits 3</option>
            </Select>
          </SimpleGrid>
        </Container>
      </Box>
      <Container maxW="container.xl" my="20">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }}>
          {products.slice(0, 8).map((product: Products, index: number) => (
            <VStack
              key={product.id}
              align="start"
              p="1.5rem"
              spacing="3"
              borderRight={{
                md: index % 2 === 0 ? "2px dashed rgb(229, 231, 235)" : "none",
                lg:
                  index !== 3 && index !== 7
                    ? "2px dashed rgb(229, 231, 235)"
                    : "none",
              }}
              borderBottom={{
                base: index < 7 ? "2px dashed rgb(229, 231, 235)" : "none",
                md: index < 6 ? "2px dashed rgb(229, 231, 235)" : "none",
                lg: index < 4 ? "2px dashed rgb(229, 231, 235)" : "none",
              }}
            >
              <Link
                href={`/products/${product.id}`}
                borderRadius="xl"
                overflow="hidden"
                bgColor="#f5f6f6"
                position="relative"
                padding="5"
                h="230px"
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
              </Link>
              <HStack
                justify="space-between"
                align="center"
                w="full"
                fontSize="0.7rem"
              >
                <Text color="#0b6999">
                  {product.attributes.category.data.attributes.name}
                </Text>
              </HStack>
              <HStack justify="space-between" align="center" w="full">
                <Text
                  fontWeight="900"
                  letterSpacing="1px"
                  fontSize="15px"
                  textTransform="uppercase"
                >
                  {product.attributes.name}
                </Text>
                <Link href="/panier">
                  <Image src={icon} alt="" style={{ width: "25px" }} />
                </Link>
              </HStack>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
