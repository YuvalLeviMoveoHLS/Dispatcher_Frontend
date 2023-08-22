import React from "react";
import { StyledInput, InputWrapper, StyledSearchIcon } from "./input.style";
import SearchIcon from "../../assets/svg/searchIcon.svg";
import FilterDropDown from "../../components/FilterDropDown/filterDropDown";
import { selectOptions } from "../../mockData/selectOptionsDropDown";

export interface InputProps {}

const SearchInput: React.FC = () => {
  return (
    <InputWrapper>
      <StyledSearchIcon src={SearchIcon} />
      {/* <StyledSearchIcon /> */}
      <StyledInput placeholder="Search" />
      <FilterDropDown
        selectOptions={selectOptions}
        placeholder="Top Headlines"
        isAppHeader={true}
      ></FilterDropDown>
    </InputWrapper>
  );
};

export default SearchInput;
