import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const StyledRecentSearchDropdown = styled.div`
  border-radius: 10px;
  max-width: 663px;
  width: 100%;
  display: flex;
  position: absolute;
  border-radius: 10px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
  background-color: ${COLORS.white};
  top: 56px;
  overflow-y: hidden;
  height: fit-content;
  //padding: 20px;
  flex-direction: column;
  //box-sizing: border-box;
  z-index: 15;
`;

export const StyledTitleAndClearContainer = styled.div`
  padding: 16px 16px 16px 16px;
  margin: 0;
  // display: flex;
  // justify-content: space-between;
`;
export const StyledUl = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const StyledListItem = styled.li`
  padding: 16px;
`;

export const StyledTitle = styled.h4`
  //padding: 16px 0px 0px 16px;
  color: ${COLORS.purple};
  //font-style: normal;
  font-family: Roboto-Regular, sans-serif;
  font-weight: 900;
  line-height: 16px;
  margin: 0;
  //font-size: 16px;
`;

export const StyledClearSpan = styled.span`
  //padding: 16px 16px 16px 16px;
  //margin: 0;
  font-family: Roboto-Regular, sans-serif;
  font-weight: 900;
  line-height: 16px;

  color: ${COLORS.purple};
`;
