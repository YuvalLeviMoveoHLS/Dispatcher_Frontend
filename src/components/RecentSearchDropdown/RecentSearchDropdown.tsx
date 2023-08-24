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

interface RecentSearchDropdownProps {
  searches?: string[];
}

const RecentSearchDropdown: React.ForwardRefRenderFunction<
  HTMLDivElement,
  RecentSearchDropdownProps
> = (props, ref) => {
  const [recentSearches, setRecentSearches] = useState<string[]>(
    props.searches || recentSearchesMock
  );
  const lastFourSearches = recentSearches.slice(-4).reverse();

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
              {/* <StyledListSpan> */}
              {search}
              {/* </StyledListSpan> */}
              <StyledRemoveIcon src={RemoveIcon} />
            </StyledListItem>
          ))}
        </StyledUl>
      </StyledRecentSearchDropdown>
    </>
  );
};

export default forwardRef(RecentSearchDropdown);
