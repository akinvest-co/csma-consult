import { Metadata } from "next"
import CartView from "../../ui/pages/cart/cart.view"

export const metadata: Metadata = {
  title: "Panier",
}

export default function Cart() {
  return <CartView />
}
