import Products from "@app/app/ui/pages/produits/produitsList"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nos Produits",
}

export default async function Produits() {
  return <Products />
}
