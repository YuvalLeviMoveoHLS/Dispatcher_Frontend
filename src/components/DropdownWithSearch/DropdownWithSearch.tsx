import React, { useEffect, useRef, useState } from "react";
import SearchInput from "../Input/searchInput";
import RecentSearchDropdown from "../RecentSearchDropdown/RecentSearchDropdown";
import FilterDropDown from "../FilterDropDown/filterDropDown";
import { selectOptionsAppHeader } from "../../mockData/selectOptionsDropDownAppHeader";
import { InputWrapper } from "../Input/searchInput.style";

const DropdownWithSearch: React.FC = () => {
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
        ></FilterDropDown>
      </InputWrapper>
      {isDropdownVisible && <RecentSearchDropdown ref={dropdownRef} />}
    </>
  );
};

export default DropdownWithSearch;
