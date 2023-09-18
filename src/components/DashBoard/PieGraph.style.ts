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
  font-size: 20px;
  font-weight: 900;
  line-height: 32px;
  margin-bottom: 8px;
  font-family: Roboto-Regular, sans-serif;
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
  background-color: ${COLORS.purple};
`;
