import CartView from "@app/app/ui/pages/cart/cart.view"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Panier",
}

export default function Cart() {
  return <CartView />
}
