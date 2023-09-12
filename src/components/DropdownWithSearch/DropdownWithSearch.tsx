import React, { useContext, useEffect, useRef, useState } from "react";
import SearchInput from "../Input/SearchInput";
import DropdownBody from "../DropdownBody/DropdownBody";
import FilterDropDown from "../FilterDropDown/FilterDropDown";
import { selectOptionsAppHeader } from "../../mockData/SelectOptionsDropDownAppHeader";
import { InputWrapper } from "../Input/SearchInput.style";
import AppContext from "../../context/AppContext";
import { ArticlesType } from "../../models/ArticlesType";
const DropdownWithSearch: React.FC = () => {
  const {
    articlesType,
    setArticlesType,
    setSelectedCategory,
    setSelectedCountry,
    setSelectedLanguage,
    setSearchInput,
    setSelectedSortBy,
    setSelectedSource,
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };
  const handleClickOutside = (event: MouseEvent) => {
    setDropdownVisibility(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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
      {isDropdownVisible && <DropdownBody ref={dropdownRef} />}
    </>
  );
};

export default DropdownWithSearch;
