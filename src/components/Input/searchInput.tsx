import React from "react";
import {
  StyledInput,
  InputWrapper,
  StyledSearchIcon,
} from "./SearchInput.style";
import SearchIcon from "../../assets/svg/searchIcon.svg";
import FilterDropDown from "../FilterDropDown/FilterDropDown";
import { selectOptionsAppHeader } from "../../mockData/SelectOptionsDropDownAppHeader";

export interface SearchInputProps {
  placeholder?: string;
  onClick?: () => void;
}
const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search",
  onClick,
}) => {
  return (
    <InputWrapper>
      <StyledSearchIcon src={SearchIcon} />
      <StyledInput
        type="text"
        placeholder={placeholder}
        onClick={onClick}
        onFocus={(e) => (e.target.placeholder = "")}
      />
    </InputWrapper>
  );
};
export default SearchInput;
