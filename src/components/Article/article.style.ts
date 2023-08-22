import styledCmp from "styled-components";
import { COLORS } from "../../utils/colors";

export const ArticleWrapper = styledCmp.div`
border: 1px solid var(--grayscale-line, #D9DBE9);
  border-radius: 20px;
  display: flex;
  align-items: center;
  max-width: 986px;
  width: 100%;
  height: 242px;
  background: ${COLORS.white};

`;
export const StyledImage = styledCmp.img`
  max-width: 245px;
  width: 100%;
  height: 242px;
  border-radius: 20px 0px 0px 20px;
  object-fit: cover;
`;

export const CardSx = {
  maxWidth: "743px",
  width: "100%",
  maxHeight: "226px",
  height: "100%",
  borderRadius: "0px 20px 20px 0px",
  border: "none",
  boxShadow: "none",
  //overflow: "auto", scroll option
  //minWidth: 275, affect the responsive
  //paddingRight: "16px",
  //paddingLeft: "16px",
  //paddingBottom: "16px",
  //marginBottom: "0px",
  //display: "flex",
  //padding: "8px 0px",
  //flexDirection: "column",
  //   //justifyContent: "space-between",
  //   alignItems: "flex-start",
  //   flex: "1 0 0",
  //   alignSelf: "stretch",
  // display: "flex",
  // flexDirection: "column",
  // alignItems: "flex-start",
  // justifyContent: "space-between",
  // alignSelf: "stretch",
  //flex: "1 0 0",
  //padding: "0px, 16px, 0px, 16px",
};

export const DateAndSourceSharedSx = {
  fontSize: "14px",
  color: COLORS.articleDateAndSource,
  //maxWidth: "711px", add to title
  width: "100%",
  maxHeight: "22px",
  height: "100%",
  maxWidth: "711px",
  fontWeight: "400",
  lineHeight: "22px",
  letterSpacing: "0.25px",
  mb: "10px",
};

export const CardContentSx = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "711px",
  width: "100%",
  flex: "1 0 0",
  maxHeight: "226px",
  height: "100%",
  "&:last-child": {
    paddingBottom: "2px",
  },
  //   flexWrap: "wrap",
  //   alignContent: "flex-start",
};

export const ArticleTitleSx = {
  maxWidth: "470px",
  width: "100%",
  maxHeight: "42px",
  height: "100%",
  fontSize: "18px",
  fontWeight: "700",
  color: COLORS.articleTitle,
  lineHeight: "normal",
  mb: "10px",
  // paddingBottom: "8px",
  //margginBottom: "8px",
};

export const ArticleContentSx = {
  maxWidth: "711px",
  width: "100%",
  maxHeight: "32px",
  //width: "100%",
  height: "100%",
  fontSize: "14px",
  color: COLORS.purple,
  fontWeight: "400",
  lineHeight: "normal",
  mb: "10px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
};

export const CardActionsSx = {
  alignSelf: "flex-end",
  //display: "flex",
  //justifyContent: "flex-end",
  //alignItems: "flex-end",
  // "& .MuiCardActions-spacing": {
  //   disableSpacing: "true",
  // },
  //width: "200px",
};
