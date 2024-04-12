import { getProducts } from "@app/app/lib/api/products"
import Products from "@app/app/ui/pages/produits/produitsList"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nos Produits",
}

export default async function Produits() {
  const { data: products } = await getProducts()

  return <Products />
}
