import styled from "styled-components";
import { COLORS } from "../../utils/constants/Colors";

export const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1px;
`;

export const StyledList = styled.ul`
  margin-top: "20px";
  padding: 0;
  margin: 0;
  margin-top: 16px;
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
  color: ${COLORS.pieGraphListItem};
  font-size: 14px;
  font-style: normal;
  font-weight: 200;
  line-height: 20px;
  letter-spacing: 0.2px;
`;
