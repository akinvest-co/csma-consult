export async function getCategories() {
  const res = await fetch(
    "https://admin-csma-consult.fly.dev/api/product-categories?populate=*",
  )

  return res.json()
}

export async function getCategory(category: string) {
  const res = await fetch(
    `https://admin-csma-consult.fly.dev/api/product-categories/${category}?populate=*`,
    { cache: "no-store" },
  )

  return res.json()
}
