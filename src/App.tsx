import "./App.css";
import StyledButton from "./components/Button/styledButton";
import FilterDropDown from "./components/FilterDropDown/filterDropDown";
// import FilterTest from "./components/FilterDropDown/filltertest";
import ArticleCard from "./components/Article/article";
import ArticleCardtest from "./components/Article/articleTest";
import SearchInput from "./components/Input/input";
import { selectOptions } from "./mockData/selectOptionsDropDown";
import { article } from "./mockData/article";
import { CssBaseline } from "@mui/material";
import AppHeader from "./components/AppHeader/appHeader";
import { AppContainer } from "./styles/globalStyles";
function App() {
  return (
    <AppContainer>
      <AppHeader />
      {/* <SearchInput showFilterDropDown={true} /> */}
      {/* <ArticleCard article={article} /> */}
      {/* <ArticleCardtest /> */}

      {/* <StyledButton>Navigate to dispatch</StyledButton> */}
      {/* <FilterTest>test</FilterTest> */}
    </AppContainer>
  );
}

export default App;
