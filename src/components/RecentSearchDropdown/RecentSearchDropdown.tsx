import React, { forwardRef, useState } from "react";
import {
  StyledClearSpan,
  StyledListItem,
  StyledListSpan,
  StyledRecentSearchDropdown,
  StyledRemoveIcon,
  StyledTitle,
  StyledTitleAndClearContainer,
  StyledUl,
} from "./RecentSearchDropdown.style";
import RemoveIcon from "../../assets/svg/removeIcon.svg";
import { recentSearchesMock } from "../../mockData/recentSearches";
import { MAX_AMOUNT_RECENT_SEARCHES } from "../../utils/constants/maxValues";

interface RecentSearchDropdownProps {
  searches?: string[];
}

const RecentSearchDropdown: React.ForwardRefRenderFunction<
  HTMLDivElement,
  RecentSearchDropdownProps
> = (props, ref) => {
  const recentSearches = props.searches ?? recentSearchesMock;
  const lastFourSearches = recentSearches
    .slice(-MAX_AMOUNT_RECENT_SEARCHES)
    .reverse();

  return (
    <>
      <StyledRecentSearchDropdown ref={ref}>
        <StyledTitleAndClearContainer>
          <StyledTitle>RECENT SEARCHES</StyledTitle>
          <StyledClearSpan>CLEAR</StyledClearSpan>
        </StyledTitleAndClearContainer>
        <StyledUl>
          {lastFourSearches.map((search, index) => (
            <StyledListItem key={index}>
              <StyledListSpan>{search}</StyledListSpan>
              <StyledRemoveIcon src={RemoveIcon} />
            </StyledListItem>
          ))}
        </StyledUl>
      </StyledRecentSearchDropdown>
    </>
  );
};

export default forwardRef(RecentSearchDropdown);
