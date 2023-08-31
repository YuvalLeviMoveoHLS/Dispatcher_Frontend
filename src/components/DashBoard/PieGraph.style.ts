import styled from "styled-components";
import { COLORS } from "../../utils/constants/Colors";
export const StyledPieGraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${COLORS.white};
  border: 1px solid;
  border-color: ${COLORS.secondary};
  border-radius: 20px;
  padding: 0px 20px 0px 20px;
  max-height: 320px;
  height: 100%;
`;

export const StyledHeader = styled.h1`
  font-size: 24px;
  font-weight: 900;
  line-height: 32px;
  margin-bottom: 8px;
`;
export const StyledHeaderContainer = styled.div`
  display: "flex";
  flex-direction: "column";
  align-items: "start";
`;
export const StyledLine = styled.div`
  width: 20px;
  height: 4px;
  border-radius: 10px;
  background-color: #5a5a89;
`;

export const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1px;
`;

export const StyledDot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-right: 16px;
  background: ${(props) => props.color};
`;

export const StyledSpan = styled.span`
  font-family: Roboto-Regular, sans-serif;
  font-size: 14px;
  color: #030035;
  font-size: 14px;
  font-style: normal;
  font-weight: 200;
  line-height: 20px;
  letter-spacing: 0.2px;
`;

export const StyledList = styled.ul`
  margin-top: "20px";
  padding: 0;
  margin: 0;
`;
