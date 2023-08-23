import "./App.css";
import StyledButton from "./components/Button/styledButton";
import FilterDropDown from "./components/FilterDropDown/filterDropDown";
import ArticleCard from "./components/Article/articleCard";
import SearchInput from "./components/Input/searchInput";
import { selectOptions } from "./mockData/selectOptionsDropDown";
import { article } from "./mockData/article";
import { CssBaseline } from "@mui/material";
import AppHeader from "./components/AppHeader/appHeader";
import { AppContainer } from "./styles/globalStyles";
function App() {
  return (
    <AppContainer>
      <AppHeader />
      <SearchInput showFilterDropDown={true} />
      <ArticleCard article={article} />
      <FilterDropDown placeholder="Country" selectOptions={selectOptions} />
      <StyledButton>Navigate to dispatch</StyledButton>
    </AppContainer>
  );
}

export default App;
