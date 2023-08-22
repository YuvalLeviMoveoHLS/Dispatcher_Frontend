import { COLORS } from "../../utils/colors";

export const formControlSxDefault = {
  maxWidth: "175px",
  width: "100%",
};
export const formControlSxAppHeader = {
  maxWidth: "148px",
  //paddingRight: "10px",
  width: "100%",
};
export const menuItemSx = {
  //paddingLeft: "24px",
  //width: "190px",

  height: "28px",
  fontSize: "12px",
  "&:hover": {
    backgroundColor: COLORS.hoverMenuItem,
  },
};
// export const filterDropDownSxDefault = {
//   fontSize: "14px",
//   height: "47px",
//   display: "inline-flex",
//   padding: "15px",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   borderRadius: "10px",
//   backgroundColor: "white",
//   "& .MuiInputBase-root": {
//     // Target the internal select element
//     paddingLeft: "15px",
//     fontSize: "14px",
//   },
//   "& .MuiOutlinedInput-notchedOutline": {
//     border: "none",
//     outline: "none",
//   },
//   "& .MuiSelect-icon": {
//     right: "15px", // adjust as needed
//     top: "20px",
//   },

//   "& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input ":
//     {
//       paddingRight: "10px",
//     },
//   "& .MuiMenu-paper": {
//     maxHeight: "calc(28px * 4 + 24px * 4)", // 28px is the height of each item, times 4 for four items. 24px is the padding (12px for top and 12px for bottom by default) for each item, times 4.
//     overflowY: "auto", // enables vertical scrolling
//   },

//   color: COLORS.purple,
//   fontFeatureSettings: "clig",
//   fontStyle: "normal",
//   fontWeight: "400",
//   lineHeight: "22px",
//   letterSpacing: "0.25px",
//   //borderLeft: `0.5px solid ${COLORS.darkPurple}`,
//   //maxHeight: "100%",
// };

export const filterDropDownSharedSx = {
  fontSize: "14px",
  height: "47px",
  display: "inline-flex",
  padding: "15px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "white",
  "& .MuiInputBase-root": {
    // Target the internal select element
    paddingLeft: "15px",
    fontSize: "14px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
    outline: "none",
  },
  "& .MuiSelect-icon": {
    right: "15px", // adjust as needed
    top: "20px",
  },

  "& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input ":
    {
      paddingRight: "10px",
    },
  "& .MuiMenu-paper": {
    maxHeight: "calc(28px * 4 + 24px * 4)", // 28px is the height of each item, times 4 for four items. 24px is the padding (12px for top and 12px for bottom by default) for each item, times 4.
    overflowY: "auto", // enables vertical scrolling
  },

  color: COLORS.purple,
  fontFeatureSettings: "clig",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "22px",
  letterSpacing: "0.25px",
  //borderLeft: `1px solid ${COLORS.darkPurple}`,
  //borderRadius: "10px",
  //maxHeight: "100%",
};

// export const filterDropDownSxAppHeader = {
//   backgroundColor: "blue", // Or any other styles specific to AppHeader
// };

export const filterDropDownSxDefault = {
  borderRadius: "10px",
};
export const filterDropDownSxAppHeader = {
  borderLeft: `0.5px solid ${COLORS.secondary}`,
  "& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input ":
    {
      paddingRight: "16px",
    },
};
const ITEM_HEIGHT = 28; // Based on your menuItemSx height
const ITEM_PADDING_TOP = 4.5; // Based on your menuItemSx padding
export const MenuPropsDefault = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4 + ITEM_PADDING_TOP * 2, // Display 4 items fully
      width: "175px", // Adjust as per your requirement
      marginTop: "8px",
      left: "8px",
    },
  },
};

export const MenuPropsAppHeader = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4 + ITEM_PADDING_TOP * 2, // Display 4 items fully
      width: "114px", // Adjust as per your requirement
      marginTop: "8px",
    },
  },
};
