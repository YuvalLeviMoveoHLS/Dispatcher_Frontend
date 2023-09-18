import { createContext } from "react";
import { ArticlesType } from "../models/ArticlesType";

interface AppContextType {
  articlesType: ArticlesType;
  setArticlesType: (filter: ArticlesType) => void;

  searchInput: string;
  setSearchInput: (input: string) => void;

  selectedSortBy: string;
  setSelectedSortBy: (value: string) => void;
  selectedSource: string;
  setSelectedSource: (value: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (value: string) => void;
  selectedCountry: string;
  setSelectedCountry: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;

  recentSearches: string[];
  setRecentSearches: (searches: string[]) => void;

  debouncedSearchInput: string;
  setDebouncedSearchInput: (input: string) => void;
}

const initialAppContextValue: AppContextType = {
  articlesType: "Top Headlines",
  setArticlesType: () => {},

  searchInput: "",
  setSearchInput: () => {},

  selectedSortBy: "",
  setSelectedSortBy: () => {},
  selectedSource: "",
  setSelectedSource: () => {},
  selectedLanguage: "",
  setSelectedLanguage: () => {},
  selectedCountry: "",
  setSelectedCountry: () => {},
  selectedCategory: "",
  setSelectedCategory: () => {},

  recentSearches: [],
  setRecentSearches: () => {},

  debouncedSearchInput: "",
  setDebouncedSearchInput: () => {},
};
const AppContext = createContext<AppContextType>(initialAppContextValue);

export default AppContext;
