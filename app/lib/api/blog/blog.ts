export async function getArticles() {
  const res = await fetch(
    "https://admin-csma-consult.fly.dev/api/blogs?populate=*",
    { cache: "no-store" },
  )

  return res.json()
}

export async function getArticle(slug: string) {
  const res = await fetch(
    `https://admin-csma-consult.fly.dev/api/blogs/${slug}?populate=*`,
    { cache: "no-store" },
  )

  return res.json()
}
