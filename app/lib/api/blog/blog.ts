export async function getArticles() {
  const res = await fetch(
    "https://csma-consult.onrender.com/api/blogs?populate=*",
    { cache: "no-store" },
  )

  return res.json()
}

export async function getArticle(slug: string) {
  const res = await fetch(
    `https://csma-consult.onrender.com/api/blogs/${slug}?populate=*`,
    { cache: "no-store" },
  )

  return res.json()
}
