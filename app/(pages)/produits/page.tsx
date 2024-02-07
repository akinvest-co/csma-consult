import ProduitsView from "@app/app/ui/pages/produits/produits.view"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nos Produits",
}

export default function Produits() {
  return <ProduitsView />
}
