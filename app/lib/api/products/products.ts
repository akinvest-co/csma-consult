export async function getProducts() {
  const res = await fetch(
    "https://admin-csma-consult.fly.dev/api/products?populate=*",
    { cache: "no-store" },
  )

  return res.json()
}

export async function getProduct(slug: string) {
  const res = await fetch(
    `https://admin-csma-consult.fly.dev/api/products/${slug}?populate=*`,
    { cache: "no-store" },
  )

  return res.json()
}
