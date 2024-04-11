"use client"

import { useAppSelector } from "@app/app/hooks/cart/hooks"
import Layout from "@app/app/layout/layout.page"
import { Container, Heading } from "@chakra-ui/react"

export default function CartView() {
  const cartItems = useAppSelector((store) => store.store)

  return (
    <Layout>
      <Container maxW="container.xl">
        {cartItems.map((product) => (
          <Heading key={product.id}>{product.attributes.name}</Heading>
        ))}
      </Container>
    </Layout>
  )
}
