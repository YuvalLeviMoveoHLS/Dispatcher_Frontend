import "./App.css";
import StyledButton from "./components/Button/StyledButton";
import FilterDropDown from "./components/FilterDropDown/FilterDropDown";
import ArticleCard from "./components/Article/ArticleCard";
import SearchInput from "./components/Input/SearchInput";
import { selectOptions } from "./mockData/SelectOptionsDropDown";
//import { articles } from "./mockData/Article";
import { CircularProgress, CssBaseline } from "@mui/material";
import AppContext from "./context/AppContext";
import InfiniteScroll from "react-infinite-scroll-component";
import AppHeader from "./components/AppHeader/AppHeader";
import noDataQuery from "./assets/svg/noDataQuery.svg";
import {
  AppContainer,
  ArticleContainer,
  DashboardContainer,
  TempDashboard,
  FilterContainer,
  MainContainer,
  MainContent,
  TitleHeadLines,
  StyledP,
  Loading,
  styleH4,
  StyledH4,
  ImgNoData,
} from "./App.styles";
import DropdownBody from "./components/DropdownBody/DropdownBody";
import x from "./assets/fonts/Roboto/Roboto-Regular.ttf";
import ArticelsList from "./components/ArticelsList/ArticelsList";
import { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar/FilterBar";
import { ArticlesType } from "./models/ArticlesType";
import { SelectOption } from "./models/SelectOption";
import ArticelsMock from "./mockData/Articles.json";
import { countArticlesBySource, createSourcesOptions } from "./helpers/helpers";
import SourcesMock from "./mockData/SourcesMock.json";
import TopHeadlinesMock from "./mockData/TopHeadlinesMock.json";
import PieGraph from "./components/DashBoard/PieGraph";
import Dashboard from "./components/DashBoard/Dashboard";
import { SourcesArray } from "./mockData/DashboardMockData";
import { Api, buildApiQuery } from "./services/Api";
import { DEFAULT_COUNTRY, PAGE_SIZE } from "./utils/constants/Constants";
import { Article } from "./models/ArticleInterface";
import { useFetchArticles } from "./hooks/useFetchArticles";
import { useSearch } from "./hooks/useSearch";
import { useFetchSources } from "./hooks/useFetchSources";
import { SpinnerCircular } from "spinners-react";
import { COLORS } from "./utils/constants/Colors";
import ClipLoader from "react-spinners/ClipLoader";
function App() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [firstRender, setFirstRender] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [uniqueSources, setUniqueSources] = useState<SelectOption[]>([]);
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
  const [initialLoadCompleted, setInitialLoadCompleted] = useState(true);
  // const [debouncedSearchInput, setDebouncedSearchInput] = useState(searchInput);
  // const [recentSearches, setRecentSearches] = useState<string[]>([]);
  // const [searchInput, setSearchInput] = useState<string>("");
  //const articles = ArticelsMock.articles;
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(true);

  useFetchSources(setUniqueSources);

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
    shouldFetch,
    setInitialLoadCompleted,
    setIsLoading
  );
  //// make 1 sec of 0 articels
  const resetArticlesAndPage = () => {
    //if articles type change the prev articels still render. /// check this again, i added articlesType to the reset dependncies.
    // if (
    //   debouncedSearchInput !== "" ||
    //   selectedSortBy !== "" ||
    //   selectedSource !== "" ||
    //   selectedLanguage !== "" ||
    //   selectedCountry !== "" ||
    //   selectedCategory !== "" ||
    //   (dateRange[0] !== null && dateRange[1] !== null)
    // )
    {
      setShouldFetch(false);
      setArticles([]);
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    setShouldFetch(false); // Prevent fetching
    setCurrentPage(1);
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
          recentSearches,
          setRecentSearches,
          debouncedSearchInput,
          setDebouncedSearchInput,
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
            {/* {articlesType === "Top Headlines" ? (
              <TitleHeadLines>Top Headlines in </TitleHeadLines>
            ) : ( */}
            {/* <p style={{ fontSize: "14px" }}> {articles.length} seraches</p> */}
            {initialLoadCompleted ? (
              <TitleHeadLines>Top Headlines in Israel</TitleHeadLines>
            ) : (
              <StyledP>{articles.length} Total results</StyledP>
            )}
            {/* )} */}
            <MainContent>
              <InfiniteScroll
                dataLength={articles.length}
                next={() => setCurrentPage((prevPage) => prevPage + 1)}
                hasMore={hasMore} // You can set a condition to stop loading more articles
                //loader={<StyledH4>Loading...</StyledH4>}
                loader={
                  <SpinnerCircular
                    secondaryColor={COLORS.secondary}
                    style={{
                      width: "140px",
                      color: COLORS.purple,
                    }}
                  />
                }
              >
                {/* <ArticelsList atricleList={articles} /> */}
                {articles.length === 0 && !isLoading && !hasMore ? (
                  <ImgNoData src={noDataQuery} />
                ) : (
                  <ArticelsList atricleList={articles} />
                )}
              </InfiniteScroll>
              <Dashboard
                data={{
                  totalArticles: articles.length,
                  sources: articlesBySource,
                }}
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
