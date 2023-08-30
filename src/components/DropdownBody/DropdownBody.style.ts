import styled from "styled-components";
import { COLORS } from "../../utils/constants/Colors";

export const StyledDropdownBody = styled.div`
  border-radius: 10px;
  max-width: 663px;
  width: 100%;
  display: flex;
  position: absolute;
  border-radius: 10px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
  background-color: ${COLORS.white};
  top: 56px;
  //overflow-y: hidden;
  height: fit-content;
  //padding: 20px;
  flex-direction: column;
  //box-sizing: border-box;
  z-index: 15;
`;

export const StyledTitleAndClearContainer = styled.div`
  padding: 16px 16px 16px 16px;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;
export const StyledUl = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 8px 0px;
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 8px 16px 8px;
  letter-spacing: 0.1px;
  font-family: Roboto-Regular, sans-serif;
  font-weight: 400;
  line-height: 16px;
  color: ${COLORS.purple};
  &:hover {
    background-color: ${COLORS.hover};
    cursor: pointer;
    border-radius: 7px;
  }
`;

export const StyledTitle = styled.h4`
  //padding: 16px 0px 0px 0px;
  color: ${COLORS.purple};
  font-family: Roboto-Regular, sans-serif;
  font-weight: 600;
  line-height: 16px;
  margin: 0;
  font-size: 14px;
`;

export const StyledClearSpan = styled.span`
  //padding: 16px 16px 16px 16px;
  //margin: 0;
  font-family: Roboto-Regular, sans-serif;
  font-weight: 600;
  line-height: 16px;
  color: ${COLORS.purple};
  cursor: pointer;
  font-size: 14px;
`;

export const StyledRemoveIcon = styled.img`
  width: 10px;
  //padding-right: 10px;
`;

export const StyledListSpan = styled.span`
  color: ${COLORS.purple};
  font-family: Roboto-Regular, sans-serif;
  font-weight: 400;
  margin: 0;
  font-size: 12px;
`;
