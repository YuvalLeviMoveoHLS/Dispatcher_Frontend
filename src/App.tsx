import "./App.css";
import StyledButton from "./components/Button/StyledButton";
import FilterDropDown from "./components/FilterDropDown/FilterDropDown";
import ArticleCard from "./components/Article/ArticleCard";
import SearchInput from "./components/Input/SearchInput";
import { selectOptions } from "./mockData/SelectOptionsDropDown";
import { articles } from "./mockData/Article";
import { CssBaseline } from "@mui/material";
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
import { useState } from "react";
import PieGraph from "./components/DashBoard/PieGraph";
import Dashboard from "./components/DashBoard/Dashboard";
import { SourcesArray } from "./mockData/DashboardMockData";

function App() {
  const [visibleBigTitle, setVisibleBigTitle] = useState(true);
  return (
    <AppContainer>
      <AppHeader />
      <MainContainer>
        <FilterContainer>
          <FilterDropDown placeholder="Country" selectOptions={selectOptions} />{" "}
          <FilterDropDown placeholder="Country" selectOptions={selectOptions} />{" "}
          <FilterDropDown placeholder="Country" selectOptions={selectOptions} />
          <FilterDropDown placeholder="Country" selectOptions={selectOptions} />
        </FilterContainer>
        {visibleBigTitle ? (
          <TitleHeadLines>Top Headlines in Israel</TitleHeadLines>
        ) : (
          <p> 30 seraches</p>
        )}
        <MainContent>
          <ArticleContainer>
            {articles.map((article, index) => (
              <ArticleCard article={article} key={index} />
            ))}
          </ArticleContainer>
          <Dashboard data={{ totalArticles: 30, sources: SourcesArray }} />
        </MainContent>
      </MainContainer>
    </AppContainer>
  );
}

export default App;
