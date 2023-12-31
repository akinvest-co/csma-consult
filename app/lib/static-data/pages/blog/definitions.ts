import type { StaticImageData } from "next/image";

export interface BlogItem {
  title: string;
  image: StaticImageData;
  description: string;
  date: string;
  category: string;
}

export interface SearchActions {
  searchTerm: string;
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
  handleSearch: (term: string) => void;
  filteredData: BlogItem[];
}
