export async function getArticles() {
  const res = await fetch(
    "https://csma-consult.onrender.com/api/blog?populate=*",
    { cache: "no-store" },
  )

  return res.json()
}

export async function getArticle(articleId: number) {
  const res = await fetch(
    `https://csma-consult.onrender.com/api/blog/${articleId}?populate=*`,
    { cache: "no-store" },
  )

  return res.json()
}
