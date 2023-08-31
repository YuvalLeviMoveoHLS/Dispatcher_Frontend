import React, { useEffect, useRef, useState } from "react";
import {
  AppHeaderWrapper,
  StyledInputWrapper,
  StyledLogo,
} from "./AppHeader.style";
import LogoIcon from "../../assets/svg/logoIcon.svg";
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
