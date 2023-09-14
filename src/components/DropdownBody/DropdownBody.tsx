import React, { forwardRef, useContext, useState } from "react";
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
import AppContext from "../../context/AppContext";

interface DropdownBodyProps {
  searches?: string[];
}

const DropdownBody: React.FC<DropdownBodyProps> = ({}) => {
  const { recentSearches, setRecentSearches } = useContext(AppContext);
  //const recentSearches = props.searches ?? recentSearchesMock;
  const lastFourSearches = recentSearches
    .slice(-MAX_AMOUNT_RECENT_SEARCHES)
    .reverse();
  const handleRemoveSearch = (searchToRemove: string) => {
    const updatedSearches = recentSearches.filter(
      (search) => search !== searchToRemove
    );
    setRecentSearches(updatedSearches);
  };
  const clearRecentSearches = () => {
    setRecentSearches([]); // Clear the recentSearches array
  };
  return (
    <>
      <StyledDropdownBody>
        <StyledTitleAndClearContainer>
          <StyledTitle>RECENT SEARCHES</StyledTitle>
          <StyledClearSpan onClick={clearRecentSearches}>CLEAR</StyledClearSpan>
        </StyledTitleAndClearContainer>
        <StyledUl>
          {lastFourSearches.map((search, index) => (
            <StyledListItem key={index}>
              <StyledListSpan>{search}</StyledListSpan>
              <StyledRemoveIcon
                src={RemoveIcon}
                onClick={(e) => {
                  //e.stopPropagation(); // Stop event propagation
                  handleRemoveSearch(search);
                }}
              />
            </StyledListItem>
          ))}
        </StyledUl>
      </StyledDropdownBody>
    </>
  );
};

export default DropdownBody;
