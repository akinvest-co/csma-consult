export async function getProducts() {
  const res = await fetch(
    "https://csma-consult.onrender.com/api/products?populate=*",
    { cache: "no-store" },
  )

  return res.json()
}
