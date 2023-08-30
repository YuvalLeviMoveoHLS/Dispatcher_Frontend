import styled from "styled-components";
import { COLORS } from "../utils/constants/colors";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #f3f3ff;
`;

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 20px 0px 20px 0px;
  border-bottom: 1px solid ${COLORS.secondary};
`;
export const MainContainer = styled.div`
  //width: calc(100% - 480px); /* 240px padding on each side */
  padding: 0 8%;
  //max-width: 1440px;
  width: 100%;
`;

export const MainContent = styled.div`
  display: flex;
  gap: 30px;
`;

export const ArticleContainer = styled.ul`
  //flex: 1;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
`;

export const TempDashboard = styled.div`
  background-color: ${COLORS.white};
  border: 1px solid;
  border-color: ${COLORS.secondary};
  border-radius: 20px;
  padding: 25px 15px 25px 25px;
  //position: relative;
  max-height: 265px;
  height: 100%;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 280px;
  width: 100%;
`;
export const TitleHeadLines = styled.h2`
  padding: 20px 0px;
  margin: 0;
`;
