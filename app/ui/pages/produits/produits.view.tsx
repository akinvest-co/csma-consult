"use client"

import { useAppDispatch, useAppSelector } from "@app/app/hooks/cart/hooks"
import Layout from "@app/app/layout/layout.page"
import { addToCart } from "@app/app/redux/cartSlice"
import { Products } from "@app/app/types/products.types"

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
  Button,
} from "@chakra-ui/react"
import Image from "next/image"
import NextLink from "next/link"

export default function ProduitsView({ products }: { products: Products[] }) {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector((store) => store.store)

  function handleAddCart(productId: number) {
    const isProductInCart = cartItems.some((item) => item.id === productId)
    console.log(isProductInCart)

    if (!isProductInCart) dispatch(addToCart(productId))
  }

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
          {products.slice(0, 8).map((product, index: number) => (
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
                href={`/produits/${product.id}`}
                borderRadius="xl"
                bgColor="#f5f6f6"
                padding="5"
              >
                <Image
                  src={product.attributes.image.data.attributes.url}
                  width={product.attributes.image.data.attributes.width}
                  height={product.attributes.image.data.attributes.height}
                  alt={product.attributes.name}
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
              <VStack align="start" spacing="5" w="full">
                <Text
                  fontWeight="900"
                  letterSpacing="1px"
                  fontSize="15px"
                  textTransform="uppercase"
                >
                  {product.attributes.name}
                </Text>

                <Button
                  size="md"
                  as={NextLink}
                  href="/cart"
                  letterSpacing="1px"
                  w="100%"
                  bg="#1799cf"
                  _hover={{ bg: "#0c84bd" }}
                  color="#fff"
                  fontSize="1rem"
                  p="1rem"
                  onClick={() => handleAddCart(product.id)}
                >
                  {cartItems.some((item) => item.id === product.id)
                    ? "Deja au panier"
                    : "Ajouter au panier"}
                </Button>
              </VStack>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
