import "./App.css";
import StyledButton from "./components/Button/styledButton";
import FilterDropDown from "./components/FilterDropDown/filterDropDown";
// import FilterTest from "./components/FilterDropDown/filltertest";
import ArticleCard from "./components/Article/articleCard";
import ArticleCardtest from "./components/Article/articleTest";
import SearchInput from "./components/Input/searchInput";
import { selectOptions } from "./mockData/selectOptionsDropDown";
import { article } from "./mockData/article";
function App() {
  return (
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
  );
}

export default App;
