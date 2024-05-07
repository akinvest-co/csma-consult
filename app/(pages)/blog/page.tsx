import BlogList from "@app/app/ui/pages/blog/blog-list"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Actualités",
}

export default function Blog({
  searchParams,
}: {
  searchParams?: {
    query?: string
  }
}) {
  const query = searchParams?.query || ""

  return <BlogList query={query} />
}
