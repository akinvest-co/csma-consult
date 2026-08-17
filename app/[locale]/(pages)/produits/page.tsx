import { Metadata } from "next"
import Products from "../../ui/pages/produits/produitsList"

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
