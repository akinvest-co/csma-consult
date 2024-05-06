export interface ImageBlog {
  data: {
    id: number
    attributes: {
      url: string
      width: number
      height: number
    }
  }
}

export interface BlogCategory {
  data: {
    id: number
    attributes: {
      name: string
      slug: string
    }
  }

  id: number
  attributes: {
    name: string
    slug: string
  }
}

export interface ArticlesProps {
  id: number
  attributes: {
    title: string
    body: string
    date: string
    slug: string
    image: ImageBlog
    blog_category: BlogCategory
  }
}

export type Articles = ArticlesProps
