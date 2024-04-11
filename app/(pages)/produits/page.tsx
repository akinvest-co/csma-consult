import { getProducts } from "@app/app/lib/api/products"
import { Products } from "@app/app/types/products.types"
import ProduitsView from "@app/app/ui/pages/produits/produits.view"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nos Produits",
}

export default async function Produits() {
  const { data: products } = await getProducts()

  return <ProduitsView products={products} />
}
