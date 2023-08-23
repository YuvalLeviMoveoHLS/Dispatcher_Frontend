import React from "react";
import { AppHeaderWrapper, StyledLogo } from "./appHeader.style";
import LogoIcon from "../../assets/svg/logoIcon.svg";
import SearchInput from "../Input/input";
import FilterDropDown from "../FilterDropDown/filterDropDown";

const AppHeader: React.FC = () => {
  return (
    <AppHeaderWrapper>
      <StyledLogo src={LogoIcon} />
      <SearchInput showFilterDropDown={true} />
      {/* <div style={{ "background-color": "black" }}>test</div> */}
      {/* <FilterDropDown
        selectOptions={selectOptionsAppHeader}
        placeholder="Top Headlines"
        isAppHeader={true}
      ></FilterDropDown> */}
    </AppHeaderWrapper>
  );
};

export default AppHeader;
