import "./App.css";
import StyledButton from "./components/Button/StyledButton";
import FilterDropDown from "./components/FilterDropDown/FilterDropDown";
import ArticleCard from "./components/Article/ArticleCard";
import SearchInput from "./components/Input/SearchInput";
import { selectOptions } from "./mockData/SelectOptionsDropDown";
//import { articles } from "./mockData/Article";
import { CssBaseline } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

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
  StyledP,
} from "./App.styles";
import DropdownBody from "./components/DropdownBody/DropdownBody";
import x from "./assets/fonts/Roboto/Roboto-Regular.ttf";
import ArticelsList from "./components/ArticelsList/ArticelsList";
import { useContext, useEffect, useState } from "react";
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
import AppContextProvider, { AppContext } from "./context/AppContext";

function MainContent() {
  const [uniqueSources, setUniqueSources] = useState<SelectOption[]>([]);

  useEffect(() => {
    const sources: SelectOption[] = createSourcesOptions(SourcesMock);
    setUniqueSources(sources);
  }, []);

  const { dateRange, setDateRange, articles } = useContext(AppContext);
  return (
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
      <StyledP>{articles.length} seraches</StyledP>
      {/* )} */}
      <MainContent>
        <InfiniteScroll
          dataLength={articles.length}
          next={() => setCurrentPage((prevPage) => prevPage + 1)}
          hasMore={hasMore} // You can set a condition to stop loading more articles
          loader={<h4>Loading...</h4>}
        >
          <ArticelsList atricleList={articles} />
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
  );
}

export default MainContent;
