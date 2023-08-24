import React from "react";
import {
  StyledClearSpan,
  StyledListItem,
  StyledRecentSearchDropdown,
  StyledTitle,
  StyledTitleAndClearContainer,
  StyledUl,
} from "./RecentSearchDropdown.style";

interface RecentSearchDropdownProps {}
const recentSearches = ["crypto", "soccer", "basketball"];
const RecentSearchDropdown: React.FC = () => {
  return (
    <>
      {/* make recent searches and clear button */}
      <StyledRecentSearchDropdown>
        <StyledTitleAndClearContainer>
          <StyledTitle>RECENT SEARCHES</StyledTitle>
          <StyledClearSpan>CLEAR</StyledClearSpan>
        </StyledTitleAndClearContainer>

        <StyledUl>
          <StyledListItem>hh</StyledListItem>
          <StyledListItem>hh</StyledListItem>
        </StyledUl>
        {/* <div>1</div>
        <div>2</div>
        <div>3</div> */}
      </StyledRecentSearchDropdown>
    </>
  );
};

export default RecentSearchDropdown;
