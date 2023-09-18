import { useEffect } from "react";
import { Api, buildApiQuery } from "../services/Api";
import { DEFAULT_COUNTRY, PAGE_SIZE } from "../utils/constants/Constants";
import { Article } from "../models/ArticleInterface";
import { ArticlesType } from "../models/ArticlesType";

export const useFetchArticles = (
  firstRender: boolean,
  debouncedSearchInput: string,
  selectedSortBy: string,
  selectedSource: string,
  selectedLanguage: string,
  selectedCountry: string,
  selectedCategory: string,
  dateRange: [Date | null, Date | null],
  currentPage: number,
  articlesType: ArticlesType, // Added this
  searchInput: string, // Added this
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>,
  setFirstRender: React.Dispatch<React.SetStateAction<boolean>>,
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>,
  shouldFetch: boolean
) => {
  useEffect(() => {
    if (!shouldFetch) return;
    const [startDate, endDate] = dateRange;
    if (
      (startDate === null && endDate !== null) ||
      (startDate !== null && endDate === null)
    ) {
      return;
    }
    if (firstRender) {
      const fetchDefaultData = async () => {
        try {
          const response = await Api.get("top-headlines", {
            params: {
              country: DEFAULT_COUNTRY,
              pageSize: PAGE_SIZE,
            },
          });
          setArticles(response.data.articles);
        } catch (error) {
          console.error("Error fetching default data:", error);
        }
      };
      fetchDefaultData();
      setFirstRender(false);
    } else {
      const fetchData = async () => {
        try {
          const options: any = {};
          if (articlesType === "Top Headlines") {
            if (selectedCountry) options.country = selectedCountry;
            if (selectedCategory) options.category = selectedCategory;
            if (selectedSource) options.sources = [selectedSource];
            if (searchInput) options.q = searchInput;
          } else if (articlesType === "Everything") {
            const [startDate, endDate] = dateRange;
            if (startDate) options.from = startDate.toISOString();
            if (endDate) {
              const adjustedEndDate = new Date(endDate);
              adjustedEndDate.setDate(endDate.getDate() + 1);
              options.to = adjustedEndDate.toISOString();
            }
            if (selectedLanguage) options.language = selectedLanguage;
            if (selectedSortBy) options.sortBy = selectedSortBy;
            if (selectedSource) options.sources = [selectedSource];
            if (searchInput) options.q = searchInput;
          }
          const params = buildApiQuery(articlesType, options, currentPage);
          params.pageSize = PAGE_SIZE;
          const response = await Api.get(
            articlesType === "Top Headlines" ? "top-headlines" : "everything",
            { params }
          );
          if (response.data.articles.length > 0) {
            setHasMore(true);
          } else {
            setHasMore(false);
          }
          setArticles((prevArticles) => [
            ...prevArticles,
            ...response.data.articles,
          ]);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [
    debouncedSearchInput,
    selectedSortBy,
    selectedSource,
    selectedLanguage,
    selectedCountry,
    selectedCategory,
    dateRange,
    currentPage,
  ]);
};
