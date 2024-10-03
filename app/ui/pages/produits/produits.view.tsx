"use client"

import AddToCartButton from "@app/app/components/addToCartButton/cartButton"
import { useAppDispatch, useAppSelector } from "@app/app/hooks/cart/hooks"
import { addToCart } from "@app/app/redux/cartSlice"
import { Products } from "@app/app/types/products.types"
import { Heading, Link, VStack } from "@chakra-ui/react"
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
          index !== 3 && index !== 7 && index !== 11
            ? "2px dashed rgb(229, 231, 235)"
            : "none",
      }}
      borderBottom={{
        base: index < 11 ? "2px dashed rgb(229, 231, 235)" : "none",
        md: index < 10 ? "2px dashed rgb(229, 231, 235)" : "none",
        lg: index < 8 ? "2px dashed rgb(229, 231, 235)" : "none",
      }}
    >
      <Link
        href={`/produits/${product.attributes.slug}`}
        borderRadius="xl"
        bgColor="#f5f6f6"
        padding="5"
        boxShadow="md"
        _hover={{ boxShadow: "lg" }}
      >
        <Image
          src={product.attributes.image.data[0].attributes.url}
          width={320}
          height={300}
          alt={product.attributes.name}
          priority
        />
      </Link>
      <Link
        href={`/produits/category/${product.attributes.product_categories.data[0].attributes.slug}`}
        _hover={{ textDecor: "none" }}
        color="#0b6999"
        fontSize="0.7rem"
      >
        {product.attributes.product_categories.data[0].attributes.name}
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
        <AddToCartButton product={product} size="md" />
      </VStack>
    </VStack>
  )
}
