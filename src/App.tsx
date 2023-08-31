import "./App.css";
import StyledButton from "./components/Button/StyledButton";
import FilterDropDown from "./components/FilterDropDown/FilterDropDown";
import ArticleCard from "./components/Article/ArticleCard";
import SearchInput from "./components/Input/SearchInput";
import { selectOptions } from "./mockData/SelectOptionsDropDown";
import { articles } from "./mockData/Article";
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
import { useState } from "react";
import FilterBar from "./components/FilterBar/FilterBar";
function App() {
  const [visibleBigTitle, setVisibleBigTitle] = useState(true);
  const [appHeaderFilter, setAppHeaderFilter] =
    useState<string>("Top Headlines");

  return (
    <>
      <AppContext.Provider
        value={{
          appHeaderFilter,
          setAppHeaderFilter,
        }}
      >
        <AppContainer>
          <AppHeader />
          <MainContainer>
            <FilterBar />
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
              <DashboardContainer>
                <TempDashboard>test12344567</TempDashboard>
                <TempDashboard>test</TempDashboard>
              </DashboardContainer>
            </MainContent>
          </MainContainer>
        </AppContainer>
      </AppContext.Provider>
    </>
  );
}

export default App;
