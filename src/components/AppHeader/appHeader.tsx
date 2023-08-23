import React from "react";
import { AppHeaderWrapper, StyledLogo } from "./appHeader.style";
import LogoIcon from "../../assets/svg/logoIcon.svg";
import SearchInput from "../Input/searchInput";
import FilterDropDown from "../FilterDropDown/filterDropDown";

const AppHeader: React.FC = () => {
  return (
    <AppHeaderWrapper>
      <StyledLogo src={LogoIcon} />
      <SearchInput showFilterDropDown={true} />
    </AppHeaderWrapper>
  );
};

export default AppHeader;
