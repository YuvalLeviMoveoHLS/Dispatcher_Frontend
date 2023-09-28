import styled from "styled-components";
import { COLORS } from "./utils/constants/Colors";
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 98vw;
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
  padding: 0 8%;
  width: 100%;
`;

export const MainContent = styled.div`
  display: flex;
  gap: 30px;
`;

export const StyledH4 = styled.h4`
  max-width: 986px;
  width: 960px;
`;
export const ImgNoData = styled.img``;
export const ArticleContainer = styled.ul`
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

export const StyledP = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-family: Roboto-Regular, sans-serif;
  color: ${COLORS.articleDateAndSource};
  opacity: 0.5;
`;
export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
