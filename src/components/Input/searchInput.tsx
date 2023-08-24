import React from "react";
import {
  StyledInput,
  InputWrapper,
  StyledSearchIcon,
} from "./searchInput.style";
import SearchIcon from "../../assets/svg/searchIcon.svg";
import FilterDropDown from "../../components/FilterDropDown/filterDropDown";
import { selectOptionsAppHeader } from "../../mockData/selectOptionsDropDownAppHeader";

export interface SearchInputProps {
  placeholder?: string;
  showFilterDropDown?: boolean;
  onClick?: () => void;
}
const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search",
  showFilterDropDown = false,
  onClick,
}) => {
  return (
    <InputWrapper>
      <StyledSearchIcon src={SearchIcon} />
      {/* <StyledSearchIcon /> */}
      <StyledInput
        type="text"
        placeholder={placeholder}
        onClick={onClick}
        onFocus={(e) => (e.target.placeholder = "")}
      />
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
