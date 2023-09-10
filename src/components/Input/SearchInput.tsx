import React, { useContext } from "react";
import {
  StyledInput,
  InputWrapper,
  StyledSearchIcon,
} from "./SearchInput.style";
import SearchIcon from "../../assets/svg/searchIcon.svg";
import AppContext from "../../context/AppContext";

export interface SearchInputProps {
  placeholder?: string;
  onClick?: () => void;
}
const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search",
  onClick,
}) => {
  const { searchInput, setSearchInput } = useContext(AppContext);
  return (
    <InputWrapper>
      <StyledSearchIcon src={SearchIcon} />
      <StyledInput
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder={placeholder}
        onClick={onClick}
        onFocus={(e) => (e.target.placeholder = "")}
      />
    </InputWrapper>
  );
};
export default SearchInput;
