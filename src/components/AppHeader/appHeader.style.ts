import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const AppHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: ${COLORS.darkPurple};
  border: 1px solid;
  border-color: ${COLORS.darkPurple};
  max-width: 100vw;
  width: 100%;
  height: 74px;
  //justify-content: space-between;
  padding: 0px 20px;
  position: relative;
  background-color: ${COLORS.darkPurple};
  //flex: 0 0 auto;
  gap: 153px;
`;
export const StyledLogo = styled.img`
  max-width: 66px;
  width: 100%;
  height: 50px;
  position: relative;
`;

export const LogoWrapper = styled.div``;
