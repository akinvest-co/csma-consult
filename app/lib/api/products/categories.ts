export async function getCategories() {
  const res = await fetch(
    "https://csma-consult.onrender.com/api/categories?populate=*",
  )

  return res.json()
}

export async function getCategory(category: string) {
  const res = await fetch(
    `https://csma-consult.onrender.com/api/categories/${category}?populate=*`,
    { cache: "no-store" },
  )

  return res.json()
}
