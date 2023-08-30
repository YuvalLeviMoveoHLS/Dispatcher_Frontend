import React, { useEffect, useRef, useState } from "react";
import {
  AppHeaderWrapper,
  StyledInputWrapper,
  StyledLogo,
} from "./AppHeader.style";
import LogoIcon from "../../assets/svg/logoIcon.svg";
import SearchInput from "../Input/SearchInput";
import FilterDropDown from "../FilterDropDown/FilterDropDown";
import DropdownBody from "../DropdownBody/DropdownBody";
import DropdownWithSearch from "../DropdownWithSearch/DropdownWithSearch";

const AppHeader: React.FC = () => {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      console.log(dropdownRef.current.contains(event.target as Node));

      setDropdownVisibility(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <AppHeaderWrapper>
      <StyledLogo src={LogoIcon} />
      <StyledInputWrapper>
        <DropdownWithSearch />
      </StyledInputWrapper>
    </AppHeaderWrapper>
  );
};

export default AppHeader;
