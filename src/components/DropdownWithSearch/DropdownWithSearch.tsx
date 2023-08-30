import React, { useEffect, useRef, useState } from "react";
import SearchInput from "../Input/SearchInput";
import DropdownBody from "../DropdownBody/DropdownBody";
import FilterDropDown from "../FilterDropDown/FilterDropDown";
import { selectOptionsAppHeader } from "../../mockData/SelectOptionsDropDownAppHeader";
import { InputWrapper } from "../Input/SearchInput.style";

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
      {isDropdownVisible && <DropdownBody ref={dropdownRef} />}
    </>
  );
};

export default DropdownWithSearch;
