export async function getProducts() {
  const res = await fetch(
    "https://admin-csma-consult.fly.dev/api/products?populate=*&pagination[limit]=100",
    { cache: "no-store" },
  )

  return res.json()
}

export async function getProduct(slug: string) {
  const res = await fetch(
    `https://admin-csma-consult.fly.dev/api/products/${slug}?populate=*&pagination[limit]=100"`,
    { cache: "no-store" },
  )

  return res.json()
}
