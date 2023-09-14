import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import SearchInput from "../Input/SearchInput";
import DropdownBody from "../DropdownBody/DropdownBody";
import FilterDropDown from "../FilterDropDown/FilterDropDown";
import { selectOptionsAppHeader } from "../../mockData/SelectOptionsDropDownAppHeader";
import { InputWrapper } from "../Input/SearchInput.style";
import AppContext from "../../context/AppContext";
import { ArticlesType } from "../../models/ArticlesType";
const DropdownWithSearch: React.FC = () => {
  const {
    setArticlesType,
    setSelectedCategory,
    setSelectedCountry,
    setSelectedLanguage,
    setSearchInput,
    setSelectedSortBy,
    setSelectedSource,
    recentSearches,
    debouncedSearchInput,
    articlesType,
  } = useContext(AppContext);
  const handleFilterChange = (newFilter: ArticlesType) => {
    setArticlesType(newFilter);
    setSearchInput("");
    setSelectedSortBy("");
    setSelectedSource("");
    setSelectedLanguage("");
    setSelectedCountry("");
    setSelectedCategory("");
  };

  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  //const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    if (recentSearches.length === 0) {
      setDropdownVisibility(false);
    } else {
      setDropdownVisibility(!isDropdownVisible);
    }
  };
  useEffect(() => {
    if (debouncedSearchInput) {
      setDropdownVisibility(false);
    } else if (recentSearches.length > 0) {
      setDropdownVisibility(true);
    }
  }, [debouncedSearchInput, recentSearches]);

  return (
    <>
      <InputWrapper>
        <SearchInput onClick={toggleDropdown} />
        <FilterDropDown
          selectOptions={selectOptionsAppHeader}
          placeholder="Top Headlines"
          isAppHeader={true}
          onChange={handleFilterChange}
        ></FilterDropDown>
      </InputWrapper>
      {isDropdownVisible && <DropdownBody />}
    </>
  );
};

export default DropdownWithSearch;
