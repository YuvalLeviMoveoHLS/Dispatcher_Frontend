import styled from "styled-components";
import { COLORS } from "../../utils/constants/colors";

export const StyledContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
  z-index- 1;
`;

export const buttonSx = {
  maxWidth: "236px",
  width: "100%",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "26px",
  letterSpacing: "0.25px",
  textTransform: "uppercase",
  backgroundColor: COLORS.primary,
  color: "white",
  borderRadius: "20px",
  gap: "10px",
  paddingLeft: "20px", //
  paddingRight: "20px",
  "& .MuiButton-endIcon": {
    marginLeft: "2px",
  },
  "&:hover": {
    backgroundColor: COLORS.primary,
    opacity: 0.8,
  },
};

export const styledSvg = styled.img`
  z-index: 2;
`;
