"use client"

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
  SimpleGrid,
  Flex,
} from "@chakra-ui/react"

export default function Cart() {
  const cartItems = useAppSelector((store) => store.store)

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
        <Heading mb="10">Votre Panier</Heading>
        {cartItems.map((product, index) => (
          <SimpleGrid
            key={product.id}
            columns={4}
            alignItems="center"
            gap="30"
            w="100%"
            py={index !== cartItems.length ? "7" : "0"}
            borderBottom={
              index !== cartItems.length - 1
                ? "2px dashed rgb(229, 231, 235)"
                : "none"
            }
          >
            <HStack spacing="8">
              <Image
                src={product.attributes.image.data.attributes.url}
                alt={product.attributes.name}
                borderRadius="xl"
                w="80px"
              />
              <Heading fontSize="md">{product.attributes.name}</Heading>
            </HStack>

            <HStack spacing="4">
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
                width="50px"
              />
              <Button
                size="xs"
                {...inc}
                onClick={() => handleIncrementQty(product.id)}
              >
                +
              </Button>
              <Box>
                <Button
                  color="red"
                  bgColor="white"
                  onClick={() => handleDeleteFromCart(product.id)}
                >
                  <DeleteIcon />
                </Button>
              </Box>
            </HStack>
          </SimpleGrid>
        ))}
      </Container>
    </Layout>
  )
}
