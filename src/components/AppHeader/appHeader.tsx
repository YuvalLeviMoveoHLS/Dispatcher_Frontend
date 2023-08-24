import React from "react";
import {
  AppHeaderWrapper,
  StyledInputWrapper,
  StyledLogo,
} from "./appHeader.style";
import LogoIcon from "../../assets/svg/logoIcon.svg";
import SearchInput from "../Input/searchInput";
import FilterDropDown from "../FilterDropDown/filterDropDown";
import RecentSearchDropdown from "../RecentSearchDropdown/RecentSearchDropdown";

const AppHeader: React.FC = () => {
  return (
    <AppHeaderWrapper>
      <StyledLogo src={LogoIcon} />

      <StyledInputWrapper>
        <SearchInput showFilterDropDown={true} />
        <RecentSearchDropdown />
      </StyledInputWrapper>
    </AppHeaderWrapper>
  );
};

export default AppHeader;
