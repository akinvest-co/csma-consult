import { useState } from 'react'
import Fuse from 'fuse.js'
import {
  BlogItem,
  SearchActions,
} from '@app/app/lib/static-data/pages/blog/definitions'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const useSearchActions = (blogData: BlogItem[]): SearchActions => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const fuseOptions = {
    keys: ['title', 'category'],
  }

  const fuse = new Fuse(blogData, fuseOptions)

  const searchData = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : blogData

  const filteredData =
    selectedCategory && searchTerm === ''
      ? blogData.filter((item) => item.category === selectedCategory)
      : searchData

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category)
    setSearchTerm('')
  }

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`)

    setSearchTerm(term)
    setSelectedCategory('')
  }

  return {
    searchTerm,
    selectedCategory,
    handleCategoryClick,
    handleSearch,
    filteredData,
  }
}

export default useSearchActions
