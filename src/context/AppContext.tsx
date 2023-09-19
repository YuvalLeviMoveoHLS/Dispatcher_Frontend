import { ReactNode, createContext, useEffect, useState } from "react";
import { ArticlesType } from "../models/ArticlesType";
import {
  countArticlesBySource,
  createSourcesOptions,
} from "../helpers/helpers";
import { useFetchArticles } from "../hooks/useFetchArticles";
import { useSearch } from "../hooks/useSearch";
import { Article } from "../models/ArticleInterface";
import { SelectOption } from "../models/SelectOption";

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

export const AppContext = createContext<AppContextType>(initialAppContextValue);

interface Props {
  children: ReactNode;
}

const AppContextProvider = ({ children }: Props) => {
  const [articlesType, setArticlesType] =
    useState<ArticlesType>("Top Headlines");
  const [selectedSortBy, setSelectedSortBy] = useState<string>("");
  const [selectedSource, setSelectedSource] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesBySource = countArticlesBySource(articles);
  // const [debouncedSearchInput, setDebouncedSearchInput] = useState(searchInput);
  // const [recentSearches, setRecentSearches] = useState<string[]>([]);
  // const [searchInput, setSearchInput] = useState<string>("");
  //const articles = ArticelsMock.articles;
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const {
    searchInput,
    setSearchInput,
    setDebouncedSearchInput,
    debouncedSearchInput,
    recentSearches,
    setRecentSearches, // Include setRecentSearches
  } = useSearch();

  useEffect(() => {
    resetArticlesAndPage();
  }, [
    debouncedSearchInput,
    selectedSortBy,
    selectedSource,
    selectedLanguage,
    selectedCountry,
    selectedCategory,
    dateRange, ///// maybe change to fetch all this dependncies
    //articlesType, // i have problem with this : "articles type change the prev articels still render" so i added this dependency.
  ]);
  useEffect(() => setCurrentPage(1), [articlesType]);

  useFetchArticles(
    firstRender,
    debouncedSearchInput,
    selectedSortBy,
    selectedSource,
    selectedLanguage,
    selectedCountry,
    selectedCategory,
    dateRange,
    currentPage,
    articlesType,
    searchInput,
    setArticles,
    setFirstRender,
    setHasMore,
    shouldFetch
  );
  //// make 1 sec of 0 articels
  const resetArticlesAndPage = () => {
    //if articles type change the prev articels still render. /// check this again, i added articlesType to the reset dependncies.
    if (
      debouncedSearchInput !== "" ||
      selectedSortBy !== "" ||
      selectedSource !== "" ||
      selectedLanguage !== "" ||
      selectedCountry !== "" ||
      selectedCategory !== "" ||
      (dateRange[0] !== null && dateRange[1] !== null)
    ) {
      setArticles([]);
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    setShouldFetch(false); // Prevent fetching
    setSearchInput("");
    setSelectedSortBy("");
    setSelectedSource("");
    setSelectedLanguage("");
    setSelectedCountry("");
    setSelectedCategory("");
  }, [articlesType]);

  useEffect(() => {
    if (!shouldFetch) {
      setShouldFetch(true);
    }
  }, [shouldFetch]);

  return (
    <AppContext.Provider
      value={{
        articlesType,
        setArticlesType,
        searchInput,
        setSearchInput,
        selectedSortBy,
        setSelectedSortBy,
        selectedSource,
        setSelectedSource,
        selectedLanguage,
        setSelectedLanguage,
        selectedCountry,
        setSelectedCountry,
        selectedCategory,
        setSelectedCategory,
        recentSearches,
        setRecentSearches,
        debouncedSearchInput,
        setDebouncedSearchInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
