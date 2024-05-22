"use client"

import { useAppDispatch, useAppSelector } from "@app/app/hooks/cart/hooks"
import { addToCart } from "@app/app/redux/cartSlice"
import { Products } from "@app/app/types/products.types"
import { Button, Heading, Link, VStack } from "@chakra-ui/react"
import Image from "next/image"

export default function ProduitsView({
  product,
  index,
}: {
  product: Products
  index: number
}) {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector((store) => store.store)

  const isProductInCart = cartItems.some((item) => item.id === product.id)

  function handleAddCart() {
    if (!isProductInCart) dispatch(addToCart(product))
  }

  return (
    <VStack
      key={product.id}
      align="start"
      p="1.5rem"
      spacing="3"
      borderRight={{
        md: index % 2 === 0 ? "2px dashed rgb(229, 231, 235)" : "none",
        lg:
          index !== 3 && index !== 7 ? "2px dashed rgb(229, 231, 235)" : "none",
      }}
      borderBottom={{
        base: index < 7 ? "2px dashed rgb(229, 231, 235)" : "none",
        md: index < 6 ? "2px dashed rgb(229, 231, 235)" : "none",
        lg: index < 4 ? "2px dashed rgb(229, 231, 235)" : "none",
      }}
    >
      <Link
        href={`/produits/${product.attributes.slug}`}
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
      <Link
        href={`/produits/category/${product.attributes.category.data.attributes.slug}`}
        _hover={{ textDecor: "none" }}
        color="#0b6999"
        fontSize="0.7rem"
      >
        {product.attributes.category.data.attributes.name}
      </Link>

      <VStack align="start" spacing="5" w="full">
        <Link
          href={`/produits/${product.attributes.slug}`}
          _hover={{ textDecor: "none" }}
        >
          <Heading
            fontWeight="900"
            letterSpacing="1px"
            fontSize="15px"
            textTransform="uppercase"
          >
            {product.attributes.name}
          </Heading>
        </Link>
        {isProductInCart ? (
          <Button
            size="md"
            letterSpacing="1px"
            w="100%"
            bg="#1799cf"
            _hover={{ bg: "#0c84bd" }}
            color="#fff"
            fontSize="1rem"
            p="1rem"
          >
            Déjà au panier
          </Button>
        ) : (
          <Button
            size="md"
            letterSpacing="1px"
            w="100%"
            bg="#1799cf"
            _hover={{ bg: "#0c84bd" }}
            color="#fff"
            fontSize="1rem"
            p="1rem"
            onClick={() => handleAddCart()}
          >
            Ajouter au panier
          </Button>
        )}
      </VStack>
    </VStack>
  )
}
