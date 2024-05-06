export async function getCategories() {
  const res = await fetch(
    "https://csma-consult.onrender.com/api/blog-categories?populate=*",
    { cache: "no-store" },
  )

  return res.json()
}

export async function getCategorie(categoryId: number) {
  const res = await fetch(
    `https://csma-consult.onrender.com/api/blog-categories/${categoryId}?populate=*`,
    { cache: "no-store" },
  )

  return res.json()
}
