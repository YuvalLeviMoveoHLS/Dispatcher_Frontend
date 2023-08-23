import React, { ReactComponentElement } from "react";
import { StyledInput, InputWrapper, StyledSearchIcon } from "./input.style";
import SearchIcon from "../../assets/svg/searchIcon.svg";
import FilterDropDown from "../../components/FilterDropDown/filterDropDown";
import { selectOptionsAppHeader } from "../../mockData/selectOptionsDropDownAppHeader";

export interface SearchInputProps {
  placeholder?: string;
  showFilterDropDown?: boolean;
}
const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search",
  showFilterDropDown = false,
}) => {
  return (
    <InputWrapper>
      <StyledSearchIcon src={SearchIcon} />
      {/* <StyledSearchIcon /> */}
      <StyledInput placeholder={placeholder} />
      {showFilterDropDown && (
        <FilterDropDown
          selectOptions={selectOptionsAppHeader}
          placeholder="Top Headlines"
          isAppHeader={true}
        ></FilterDropDown>
      )}
    </InputWrapper>
  );
};

export default SearchInput;
