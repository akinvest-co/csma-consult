export interface ProductCategory {
  id: number

  data: {
    id: number
    attributes: {
      name: string
      slug: string
    }
  }

  attributes: {
    name: string
    slug: string
  }
}

export interface ImageProduct {
  data: [
    {
      id: number
      attributes: {
        url: string
        width: number
        height: number
      }
    },
  ]
}

export interface ProductsProps {
  id: number
  attributes: {
    name: string
    slug: string
    category: ProductCategory
    image: ImageProduct
  }

  quantity: number
}

export type Products = ProductsProps
