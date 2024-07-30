"use client"

import ContactFormEmail from "@app/app/emails/contact-form"
import { useAppDispatch, useAppSelector } from "@app/app/hooks/cart/hooks"
import Layout from "@app/app/layout/layout.page"
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "@app/app/redux/cartSlice"
import { DeleteIcon } from "@chakra-ui/icons"

import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Image,
  useNumberInput,
  Text,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react"
import Link from "next/link"

export default function Cart() {
  const cartItems = useAppSelector((store) => store.store)
  console.log(cartItems)

  const dispatch = useAppDispatch()

  function handleIncrementQty(productId: number) {
    dispatch(incrementQty(productId))
  }

  function handleDecrementQty(productId: number) {
    dispatch(decrementQty(productId))
  }

  function handleDeleteFromCart(producttId: number) {
    dispatch(removeFromCart(producttId))
  }

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      defaultValue: 1,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <Layout>
      <Container maxW="container.xl" my="20">
        <SimpleGrid
          columns={{ sm: 1, base: 1, md: 1, xl: 2 }}
          spacing="20"
          justifyContent="space-between"
        >
          <Box>
            <HStack mb="10" justify="space-between" alignItems="center">
              <Heading fontSize={{ sm: "medium", base: "md", md: "larger" }}>
                Votre Panier
              </Heading>
              <Text fontSize="small">{cartItems.length} produit(s)</Text>
            </HStack>

            {cartItems.length === 0 && (
              <VStack align="start" spacing="5">
                <Text>Votre panier est vide !</Text>
                <Button
                  type="submit"
                  as={Link}
                  href="/produits"
                  bg="#1799cf"
                  textTransform="uppercase"
                  py="6"
                  letterSpacing="1px"
                  color="white"
                  _hover={{ bg: "#0c84bd" }}
                  borderRadius="999rem"
                >
                  VOIR NOS SOLUTIONS MATERIELLES
                </Button>
              </VStack>
            )}

            {cartItems.map((product, index) => (
              <HStack
                key={product.id}
                spacing="20"
                w="100%"
                alignItems="center"
                py={index !== cartItems.length ? "5" : "0"}
                borderTop="2px dashed rgb(229, 231, 235)"
              >
                <HStack spacing="10" align="center">
                  <HStack spacing="5">
                    <Image
                      src={product.attributes.image.data[0].attributes.url}
                      alt={product.attributes.name}
                      borderRadius="xl"
                      w={{ sm: "50px", base: "50px", md: "70px" }}
                    />
                    <Heading fontSize={{ base: "x-small", md: "md" }}>
                      {product.attributes.name}
                    </Heading>
                  </HStack>

                  <HStack spacing="2" justify="center">
                    <HStack>
                      <Button
                        size="xs"
                        {...dec}
                        onClick={() => handleDecrementQty(product.id)}
                      >
                        -
                      </Button>
                      <Input
                        {...input}
                        value={product.quantity}
                        size="sm"
                        height="25px"
                        width="45px"
                        borderRadius="xl"
                      />
                      <Button
                        size="xs"
                        {...inc}
                        onClick={() => handleIncrementQty(product.id)}
                      >
                        +
                      </Button>
                    </HStack>
                    <Box>
                      <Button
                        bgColor="white"
                        onClick={() => handleDeleteFromCart(product.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </Box>
                  </HStack>
                </HStack>
              </HStack>
            ))}
          </Box>
          <ContactFormEmail />
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
