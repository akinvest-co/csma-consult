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
  VStack,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react"
import { useContactForm } from "@app/app/validation/contactForm"

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

  const { form, onSubmit } = useContactForm()

  return (
    <Layout>
      <Container maxW="container.xl" my="20">
        <SimpleGrid
          columns={2}
          spacing="20"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Heading mb="10">Votre Panier</Heading>
            {cartItems.map((product, index) => (
              <HStack
                key={product.id}
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
                    borderRadius="xl"
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
          <Box
            boxShadow="0px 0px 25px rgba(54, 91, 125, 0.2)"
            p="6"
            rounded="2xl"
            alignSelf="self-start"
          >
            <form onSubmit={form.onSubmit(onSubmit)}>
              <VStack spacing="5">
                <FormControl isInvalid={!!form.errors.user_name}>
                  <FormLabel htmlFor="user_name">Prénom et Nom</FormLabel>
                  <Input
                    id="user_name"
                    placeholder="Prénom et Nom"
                    {...form.getInputProps("user_name")}
                  />
                  {form.errors.user_name && (
                    <FormErrorMessage>{form.errors.user_name}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl isInvalid={!!form.errors.user_email}>
                  <FormLabel htmlFor="user_email">Email</FormLabel>
                  <Input
                    id="user_email"
                    placeholder="Votre email"
                    {...form.getInputProps("user_email")}
                  />
                  {form.errors.user_email && (
                    <FormErrorMessage>
                      {form.errors.user_email}
                    </FormErrorMessage>
                  )}
                </FormControl>

                <FormControl isInvalid={!!form.errors.user_message}>
                  <FormLabel htmlFor="user_message">Message</FormLabel>
                  <Textarea
                    id="user_message"
                    placeholder="Message"
                    {...form.getInputProps("user_message")}
                  />
                  {form.errors.user_message && (
                    <FormErrorMessage>
                      {form.errors.user_message}
                    </FormErrorMessage>
                  )}
                </FormControl>

                <Button
                  type="submit"
                  w="full"
                  bg="#1799cf"
                  textTransform="uppercase"
                  py="6"
                  letterSpacing="1px"
                  color="white"
                  _hover={{ bg: "#0c84bd" }}
                  borderRadius="999rem"
                >
                  Demande de devis
                </Button>
              </VStack>
            </form>
          </Box>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
