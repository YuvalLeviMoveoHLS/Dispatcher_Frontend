import styled from "styled-components";
import { COLORS } from "../../utils/constants/Colors";

export const StyledLineGraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  border: 1px solid;
  border-color: ${COLORS.secondary};
  border-radius: 20px;
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
  padding: 0px 20px 0px 20px;
`;
export const StyledLine = styled.div`
  width: 20px;
  height: 4px;
  border-radius: 10px;
  background-color: ${COLORS.purple};
`;
