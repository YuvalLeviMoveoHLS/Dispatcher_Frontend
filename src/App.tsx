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
              <Dashboard data={{ totalArticles: 30, sources: SourcesArray }} />
            </MainContent>
          </MainContainer>
        </AppContainer>
      </AppContext.Provider>
    </>
  );
}

export default App;
