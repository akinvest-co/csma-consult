export async function getCategories() {
  const res = await fetch(
    "https://csma-consult.onrender.com/api/categories?populate=*",
  )

  return res.json()
}

export async function getCategory(slug: string) {
  const res = await fetch(
    `https://csma-consult.onrender.com/api/categories/${slug}?populate=*`,
    { cache: "no-store" },
  )

  return res.json()
}
