import { Metadata } from "next"
import BlogList from "../../ui/pages/blog/blog-list"

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
