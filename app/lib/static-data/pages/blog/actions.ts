import { useState } from "react";
import Fuse from "fuse.js";
import {
  BlogItem,
  SearchActions,
} from "@app/app/lib/static-data/pages/blog/definitions";

const useSearchActions = (blogData: BlogItem[]): SearchActions => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const fuseOptions = {
    keys: ["title", "category"],
  };

  const fuse = new Fuse(blogData, fuseOptions);

  const searchData = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : blogData;

  const filteredData =
    selectedCategory && searchTerm === ""
      ? blogData.filter((item) => item.category === selectedCategory)
      : searchData;

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
    setSearchTerm("");
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setSelectedCategory("");
  };

  return {
    searchTerm,
    selectedCategory,
    handleCategoryClick,
    handleSearch,
    filteredData,
  };
};

export default useSearchActions;
