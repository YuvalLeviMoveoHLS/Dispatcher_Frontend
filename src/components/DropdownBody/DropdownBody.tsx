import React, { forwardRef, useState } from "react";
import {
  StyledClearSpan,
  StyledListItem,
  StyledListSpan,
  StyledDropdownBody,
  StyledRemoveIcon,
  StyledTitle,
  StyledTitleAndClearContainer,
  StyledUl,
} from "./DropdownBody.style";
import RemoveIcon from "../../assets/svg/removeIcon.svg";
import { recentSearchesMock } from "../../mockData/RecentSearches";
import { MAX_AMOUNT_RECENT_SEARCHES } from "../../utils/constants/MaxValues";

interface DropdownBodyProps {
  searches?: string[];
}

const DropdownBody: React.ForwardRefRenderFunction<
  HTMLDivElement,
  DropdownBodyProps
> = (props, ref) => {
  const recentSearches = props.searches ?? recentSearchesMock;
  const lastFourSearches = recentSearches
    .slice(-MAX_AMOUNT_RECENT_SEARCHES)
    .reverse();

  return (
    <>
      <StyledDropdownBody ref={ref}>
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
      </StyledDropdownBody>
    </>
  );
};

export default forwardRef(DropdownBody);
