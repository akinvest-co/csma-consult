export async function getCategories() {
  const res = await fetch(
    "https://admin-csma-consult.fly.dev/api/blog-categories?populate=*",
    { cache: "no-store" },
  )

  return res.json()
}

export async function getCategory(slug: string) {
  const res = await fetch(
    `https://admin-csma-consult.fly.dev/api/blog-categories/${slug}?populate=*`,
    { cache: "no-store" },
  )

  return res.json()
}
