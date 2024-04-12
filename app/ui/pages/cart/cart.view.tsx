"use client"

import { useAppDispatch, useAppSelector } from "@app/app/hooks/cart/hooks"
import Layout from "@app/app/layout/layout.page"
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "@app/app/redux/cartSlice"
import { Box, Container, Heading } from "@chakra-ui/react"
import Image from "next/image"

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

  return (
    <Layout>
      <Container maxW="container.xl">
        <Heading>Votre Panier</Heading>
        {cartItems.map((product) => (
          <Box key={product.id}>
            <Heading>{product.attributes.name}</Heading>
            <Image
              src={product.attributes.image.data.attributes.url}
              width={100}
              height={100}
              alt={product.attributes.name}
            />

            <Box>
              <button onClick={() => handleDecrementQty(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => handleIncrementQty(product.id)}>+</button>
              <button onClick={() => handleDeleteFromCart(product.id)}>
                Delete Product
              </button>
            </Box>
          </Box>
        ))}
      </Container>
    </Layout>
  )
}
