async function getCategories() {
  const res = await fetch(
    "https://csma-consult.onrender.com/api/categories?populate=*",
  )

  return res.json()
}
