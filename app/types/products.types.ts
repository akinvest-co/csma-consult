export interface ProductSubCategory {
  data: {
    id: number
    attributes: {
      name: string
      slug: string
    }
  }
}

export interface ProductCategory {
  data: {
    id: number
    attributes: {
      name: string
      slug: string
    }
  }
}

export interface ImageProduct {
  data: {
    id: number
    attributes: {
      url: string
      width: number
      height: number
    }
  }
}

export interface ProductsProps {
  id: number
  attributes: {
    name: string
    slug: string
    category: ProductCategory
    sub_categorie: ProductSubCategory
    image: ImageProduct
  }

  quantity: number
}

export type Products = ProductsProps
