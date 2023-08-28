import "./App.css";
import StyledButton from "./components/Button/styledButton";
import FilterDropDown from "./components/FilterDropDown/filterDropDown";
// import FilterTest from "./components/FilterDropDown/filltertest";
import ArticleCard from "./components/Article/articleCard";
import ArticleCardtest from "./components/Article/articleTest";
import SearchInput from "./components/Input/searchInput";
import { selectOptions } from "./mockData/selectOptionsDropDown";
import { article } from "./mockData/article";
<<<<<<< Updated upstream
=======
import { CssBaseline } from "@mui/material";
import AppHeader from "./components/AppHeader/appHeader";
import {
  AppContainer,
  ArticleContainer,
  DashboardContainer,
  FilterContainer,
  MainContainer,
  MainContent,
  TitleHeadLines,
} from "./styles/globalStyles";
import RecentSearchDropdown from "./components/RecentSearchDropdown/RecentSearchDropdown";
import x from "./assets/fonts/Roboto/Roboto-Regular.ttf";
import { useState } from "react";
>>>>>>> Stashed changes
function App() {
  const [visibleBigTitle, setVisibleBigTitle] = useState(true);
  return (
<<<<<<< Updated upstream
    <div>
      <SearchInput />
      <ArticleCard article={article} />
      {/* <ArticleCardtest /> */}
      <FilterDropDown
        selectOptions={selectOptions}
        placeholder="Country"
      ></FilterDropDown>
      {/* <StyledButton>Navigate to dispatch</StyledButton> */}
      {/* <FilterTest>test</FilterTest> */}
    </div>
=======
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
            <ArticleCard article={article} />
            <ArticleCard article={article} />
            <ArticleCard article={article} />
            <ArticleCard article={article} />
            <ArticleCard article={article} />
          </ArticleContainer>
        </MainContent>
        {/* <RecentSearchDropdown /> */}
        {/* <SearchInput showFilterDropDown={true} /> */}
        {/* <ArticleCard article={article} />
        <FilterDropDown placeholder="Country" selectOptions={selectOptions} />
        <StyledButton>Navigate to dispatch</StyledButton> */}
      </MainContainer>
    </AppContainer>
>>>>>>> Stashed changes
  );
}

export default App;
