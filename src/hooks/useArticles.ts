// src/hooks/useArticles.ts
import { useEffect, useState } from "react";
import { Article } from "../models/ArticleInterface";
import { ArticlesType } from "../models/ArticlesType";
import { SelectOption } from "../models/SelectOption";
import { Api, buildApiQuery } from "../services/Api";
import { DEFAULT_COUNTRY, PAGE_SIZE } from "../utils/constants/Constants";
import {
  countArticlesBySource,
  createSourcesOptions,
} from "../helpers/helpers";
import SourcesMock from "../mockData/SourcesMock.json";

export const useArticles = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [uniqueSources, setUniqueSources] = useState<SelectOption[]>([]);
  const [articlesType, setArticlesType] =
    useState<ArticlesType>("Top Headlines");
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedSortBy, setSelectedSortBy] = useState<string>("");
  const [selectedSource, setSelectedSource] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [debouncedSearchInput, setDebouncedSearchInput] = useState(searchInput);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const sources: SelectOption[] = createSourcesOptions(SourcesMock);
    setUniqueSources(sources);
  }, [
    articles,
    searchInput,
    selectedSortBy,
    selectedSource,
    selectedLanguage,
    selectedCountry,
    selectedCategory,
  ]);

  // ... (other useEffect hooks)
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchInput(searchInput);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchInput]);
  useEffect(() => {
    const fetchDefaultData = async () => {
      try {
        const response = await Api.get("top-headlines", {
          params: {
            country: DEFAULT_COUNTRY,
            pageSize: PAGE_SIZE,
          },
        });
        setArticles(response.data.articles);

        // Reset state to initial values
        setArticlesType("Top Headlines");
        setSelectedCountry("");
        //setSelectedCategory("");
      } catch (error) {
        console.error("Error fetching default data:", error);
      }
    };

    fetchDefaultData();
  }, []);

  return {
    dateRange,
    setDateRange,
    uniqueSources,
    setUniqueSources,
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
    debouncedSearchInput,
    setDebouncedSearchInput,
    recentSearches,
    setRecentSearches,
    articles,
    setArticles,
    currentPage,
    setCurrentPage,
  };
};
