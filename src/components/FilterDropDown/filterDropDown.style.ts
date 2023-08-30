import { COLORS } from "../../utils/constants/colors";

export const formControlSxDefault = {
  maxWidth: "175px",
  width: "100%",
};
export const formControlSxAppHeader = {
  maxWidth: "148px",
  width: "100%",
};
export const menuItemSx = {
  height: "28px",
  fontSize: "12px",
  "&:hover": {
    backgroundColor: COLORS.hoverMenuItem,
  },
};

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
    right: "15px",
    top: "20px",
  },

  "& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input ":
    {
      paddingRight: "10px",
    },
  "& .MuiMenu-paper": {
    maxHeight: "calc(28px * 4 + 24px * 4)",
    overflowY: "auto",
  },
  //fontFamily: " Roboto-Regular, sans-serif",
  color: COLORS.purple,
  fontFeatureSettings: "clig",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "22px",
  letterSpacing: "0.25px",
};

export const filterDropDownSxDefault = {
  borderRadius: "10px",
};
export const filterDropDownSxAppHeader = {
  //borderRadius: "0px 10px 10px 0px",

  borderLeft: `0.5px solid ${COLORS.secondary}`,
  borderRadius: "0 10px 10px 0",
  "& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input ":
    {
      paddingRight: "16px",
    },
};
const ITEM_HEIGHT = 28;
const ITEM_PADDING_TOP = 4.5;
export const MenuPropsDefault = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4 + ITEM_PADDING_TOP * 2,
      width: "175px",
      marginTop: "8px",
      left: "8px",
      color: COLORS.purple,
    },
  },
};

export const MenuPropsAppHeader = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4 + ITEM_PADDING_TOP * 2,
      width: "114px",
      marginTop: "8px",
      color: COLORS.purple,
    },
  },
};
