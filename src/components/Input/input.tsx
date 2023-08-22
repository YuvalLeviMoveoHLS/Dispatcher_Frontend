import React from "react";
import { StyledInput, InputWrapper, StyledSearchIcon } from "./input.style";
import SearchIcon from "../../assets/svg/searchIcon.svg";
import FilterDropDown from "../../components/FilterDropDown/filterDropDown";
import { selectOptionsAppHeader } from "../../mockData/selectOptionsDropDownAppHeader";

export interface SearchInput {
  placeholder?: string;
}
const SearchInput: React.FC<SearchInput> = ({ placeholder = "Search" }) => {
  return (
    <InputWrapper>
      <StyledSearchIcon src={SearchIcon} />
      {/* <StyledSearchIcon /> */}
      <StyledInput placeholder={placeholder} />
      <FilterDropDown
        selectOptions={selectOptionsAppHeader}
        placeholder="Top Headlines"
        isAppHeader={true}
      ></FilterDropDown>
    </InputWrapper>
  );
};

export default SearchInput;
