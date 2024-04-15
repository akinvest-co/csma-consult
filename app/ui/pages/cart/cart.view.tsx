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
  Flex,
  FormControl,
  FormLabel,
  SimpleGrid,
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
        <SimpleGrid columns={2} gap="20">
          <Box>
            <Heading mb="10">Votre Panier</Heading>
            {cartItems.map((product, index) => (
              <HStack
                key={product.id}
                // w="100%"
                spacing="20"
                alignItems="center"
                py={index !== cartItems.length ? "5" : "0"}
                borderTop="2px dashed rgb(229, 231, 235)"
              >
                <HStack spacing="5">
                  <Image
                    src={product.attributes.image.data.attributes.url}
                    alt={product.attributes.name}
                    borderRadius="xl"
                    w="70px"
                  />
                  <Heading fontSize="md">{product.attributes.name}</Heading>
                </HStack>

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
                      bgColor="white"
                      onClick={() => handleDeleteFromCart(product.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Box>
                </HStack>
              </HStack>
            ))}
          </Box>
          <FormControl isRequired w="60%">
            <FormLabel>Nom</FormLabel>
            <Input placeholder="First name" />
            <FormLabel>Prenom</FormLabel>
            <Input placeholder="First name" />
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <Button>Button</Button>
          </FormControl>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
