export async function getArticles() {
  const res = await fetch(
    "https://csma-consult.onrender.com/api/blogs?populate=*",
    { cache: "no-store" },
  )

  return res.json()
}

export async function getArticle(articleId: number) {
  const res = await fetch(
    `https://csma-consult.onrender.com/api/blogs/${articleId}?populate=*`,
    { cache: "no-store" },
  )

  return res.json()
}
