import "./App.css";
import StyledButton from "./components/Button/StyledButton";
import FilterDropDown from "./components/FilterDropDown/FilterDropDown";
import ArticleCard from "./components/Article/ArticleCard";
import SearchInput from "./components/Input/SearchInput";
import { selectOptions } from "./mockData/SelectOptionsDropDown";
//import { articles } from "./mockData/Article";
import { CssBaseline } from "@mui/material";
import AppContext from "./context/AppContext";

import AppHeader from "./components/AppHeader/AppHeader";
import {
  AppContainer,
  ArticleContainer,
  DashboardContainer,
  TempDashboard,
  FilterContainer,
  MainContainer,
  MainContent,
  TitleHeadLines,
} from "./App.styles";
import DropdownBody from "./components/DropdownBody/DropdownBody";
import x from "./assets/fonts/Roboto/Roboto-Regular.ttf";
import ArticelsList from "./components/ArticelsList/ArticelsList";
import { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar/FilterBar";
import { ArticlesType } from "./models/ArticlesType";
import { SelectOption } from "./models/SelectOption";

import { createSourcesOptions } from "./helpers/helpers";
import SourcesMock from "./mockData/SourcesMock.json";
import TopHeadlinesMock from "./mockData/TopHeadlinesMock.json";
import PieGraph from "./components/DashBoard/PieGraph";
import Dashboard from "./components/DashBoard/Dashboard";
import { SourcesArray } from "./mockData/DashboardMockData";
import { Api, buildApiQuery } from "./services/Api";
import { DEFAULT_COUNTRY, PAGE_SIZE } from "./utils/constants/Constants";

function App() {
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

  const articles = TopHeadlinesMock.articles;
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

  /////// first

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await Api.get("top-headlines", {
  //         params: {
  //           country: DEFAULT_COUNTRY,
  //           pageSize: PAGE_SIZE,
  //         },
  //       });
  //       // setArticles(response.data.articles);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  ///// with states

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Initialize an empty options object
  //       const options: any = {};

  //       // Populate the options object based on the states
  //       if (articlesType === "Top Headlines") {
  //         if (selectedCountry) options.country = selectedCountry;
  //         if (selectedCategory) options.category = selectedCategory;
  //         if (selectedSource) options.sources = selectedSource;
  //         if (searchInput) options.q = searchInput;
  //       } else if (articlesType === "Everything") {
  //         if (selectedLanguage) options.language = selectedLanguage;
  //         if (selectedSortBy) options.sortBy = selectedSortBy;
  //         if (selectedSource) options.sources = selectedSource;
  //         if (searchInput) options.q = searchInput;
  //       }

  //       // Use buildApiQuery to get the query parameters
  //       const params = buildApiQuery(articlesType, options);

  //       // Make the API call using the query parameters
  //       const response = await Api.get(articlesType.toLowerCase(), { params });

  //       // Uncomment the line below to set the articles in your state
  //       // setArticles(response.data.articles);

  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [
  //   articlesType,
  //   selectedCountry,
  //   selectedCategory,
  //   selectedSource,
  //   searchInput,
  //   selectedLanguage,
  //   selectedSortBy,
  // ]); // Add all relevant states to the dependency array
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Define the options based on your requirements
  //       const options: any = {
  //         // category: "sports",
  //         //sources: ["bbc-news"],
  //         //q: "עומר",
  //         // Add other options here if needed
  //       };
  //       const effectiveCountry = selectedCountry || "il";
  //       if (effectiveCountry) options.country = effectiveCountry;
  //       // Use buildApiQuery to get the query parameters
  //       const params = buildApiQuery(articlesType, options);
  //       params.pageSize = PAGE_SIZE;
  //       console.log(params);
  //       // Make the API call using the query parameters
  //       const response = await Api.get(
  //         articlesType === "Top Headlines"
  //           ? articlesType.toLowerCase().split(" ").join("-")
  //           : articlesType.toLowerCase(),
  //         { params }
  //       );

  //       // Uncomment the line below to set the articles in your state
  //       // setArticles(response.data.articles);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [articlesType]); // Dependency array, re-run the effect if articlesType changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const options: any = {};

        if (articlesType === "Top Headlines") {
          if (selectedCountry) options.country = selectedCountry;
          if (selectedCategory) options.category = selectedCategory;
          if (selectedSource) options.sources = [selectedSource];
          if (searchInput) options.q = searchInput;
        } else if (articlesType === "Everything") {
          if (selectedLanguage) options.language = selectedLanguage;
          if (selectedSortBy) options.sortBy = selectedSortBy;
          if (selectedSource) options.sources = [selectedSource];
          if (searchInput) options.q = searchInput;
        }

        const params = buildApiQuery(articlesType, options);
        params.pageSize = PAGE_SIZE;

        const response = await Api.get(
          articlesType === "Top Headlines" ? "top-headlines" : "everything",
          { params }
        );

        console.log(response.data);
        // Uncomment this when you are ready to set state
        // setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [
    articlesType,
    searchInput,
    selectedSortBy,
    selectedSource,
    selectedLanguage,
    selectedCountry,
    selectedCategory,
  ]);

  return (
    <>
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
        }}
      >
        <AppContainer>
          <AppHeader />
          <MainContainer>
            <FilterBar
              sourceOptions={uniqueSources}
              dateRange={dateRange}
              setDateRange={setDateRange}
            />
            {articlesType === "Top Headlines" ? (
              <TitleHeadLines>Top Headlines in </TitleHeadLines>
            ) : (
              <p> {articles.length} seraches</p>
            )}
            <MainContent>
              <ArticelsList atricleList={articles} />
              <Dashboard
                data={{ totalArticles: 30, sources: SourcesArray }}
                articles={articles}
              />
            </MainContent>
          </MainContainer>
        </AppContainer>
      </AppContext.Provider>
    </>
  );
}

export default App;
