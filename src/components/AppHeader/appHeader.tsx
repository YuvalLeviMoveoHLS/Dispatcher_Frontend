import React, { useEffect, useRef, useState } from "react";
import {
  AppHeaderWrapper,
  StyledInputWrapper,
  StyledLogo,
} from "./appHeader.style";
import LogoIcon from "../../assets/svg/logoIcon.svg";
import SearchInput from "../Input/searchInput";
import FilterDropDown from "../FilterDropDown/filterDropDown";
import RecentSearchDropdown from "../RecentSearchDropdown/RecentSearchDropdown";
import DropdownWithSearch from "../DropdownWithSearch/DropdownWithSearch";

const AppHeader: React.FC = () => {
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
