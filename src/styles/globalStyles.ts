import styled from "styled-components";
import { COLORS } from "../utils//colors";

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
  // width: 100%;
  // padding: 0px 240px;
  // max-width: 1440px;

  //width: calc(100% - 480px); /* 240px padding on each side */
  padding: 0 230px;
  max-width: 1440px;
`;

export const MainContent = styled.div`
  //display: flex;
`;

export const ArticleContainer = styled.ul`
  //flex: 1;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DashboardContainer = styled.div`
  width: 300px; /* Or whatever width you want */
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
`;

export const TitleHeadLines = styled.h2`
  padding: 20px 0px;
  margin: 0;
`;
