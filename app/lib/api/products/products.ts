export async function getProducts() {
  const res = await fetch(
    "https://csma-consult.onrender.com/api/products?populate=*",
    { cache: "no-store" },
  )

  return res.json()
}

export async function getProduct(productId: number) {
  const res = await fetch(
    `https://csma-consult.onrender.com/api/products/${productId}?populate=*`,
    { cache: "no-store" },
  )

  return res.json()
}
