"use client"

import { useAppDispatch, useAppSelector } from "@app/app/hooks/cart/hooks"
import { addToCart } from "@app/app/redux/cartSlice"
import { Products } from "@app/app/types/products.types"
import { Button } from "@chakra-ui/react"

export default function AddToCartButton({
  product,
  size,
}: {
  product: Products
  size: string
}) {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector((store) => store.store)

  const isProductInCart = cartItems.some((item) => item.id === product.id)

  function handleAddCart() {
    if (!isProductInCart) dispatch(addToCart(product))
  }

  return (
    <>
      {isProductInCart ? (
        <Button
          size={size}
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
          size={size}
          letterSpacing="1px"
          w="100%"
          bg="#1799cf"
          _hover={{ bg: "#0c84bd" }}
          color="#fff"
          fontSize="1rem"
          p="1rem"
          onClick={handleAddCart}
        >
          Ajouter au panier
        </Button>
      )}
    </>
  )
}
