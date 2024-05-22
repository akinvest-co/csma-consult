import Products from "@app/app/ui/pages/produits/produitsList"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nos Produits",
}

export default function Produits({
  searchParams,
}: {
  searchParams?: {
    query?: string
  }
}) {
  const query = searchParams?.query || ""
  return <Products query={query} />
}
