import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const StyledContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
  z-index- 1;
`;

export const buttonSx = {
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
  paddingLeft: "20px", // Add padding to the left of the text
  paddingRight: "20px",
  "& .MuiButton-endIcon": {
    marginLeft: "2px", // You can adjust this value to bring the icon closer or further from the text
  },
  "&:hover": {
    backgroundColor: COLORS.primary,
    opacity: 0.8,
  },
};

// export const StyledButton = styled(Button)` // styled.button
//   background-color: ${COLORS.primary};
//   color: white;

//   &:hover {
//     background-color: ${COLORS.primary};
//   }
// `;

export const styledSvg = styled.img`
  z-index: 2;
`;

// export const StyledButton = styled.button`
//   width: 500px;
// `;
// export const StyledButton = styled(Button)`
//   width: "330px";
// `;
// const buttonSx = {
//   width: "330px",
// };
