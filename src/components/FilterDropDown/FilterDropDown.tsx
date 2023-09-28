import { FC, ReactNode, useState } from "react";
import { SxProps } from "@mui/material";
// import InputLabel from "@mui/material/InputLabel";
import { COLORS } from "../../utils/constants/Colors";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ArrowDownIcon from "../../assets/icon-tsx/arrowDownIcon";
import {
  filterDropDownSharedSx,
  filterDropDownSxDefault,
  filterDropDownSxAppHeader,
  formControlSxAppHeader,
  formControlSxDefault,
  menuItemSx,
  MenuPropsDefault,
  MenuPropsAppHeader,
  StyledSpan,
  StyledMenuListSX,
} from "./FilterDropDown.style";
import { SelectOption } from "../../models/SelectOption";
import ArrowDownIconDissable from "../../assets/icon-tsx/arrowDownIconDissable";

type FilterDropDownProps = {
  selectOptions: SelectOption[];
  defaultValue?: string;
  placeholder?: string;
  children?: ReactNode;
  isAppHeader?: boolean;
  filterDropDownStyle?: SxProps;
  formControlStyle?: SxProps;
  menuItemStyle?: SxProps;
  disabled?: boolean;
  onChange?: (value: string) => void;
};

const FilterDropDown: FC<FilterDropDownProps> = ({
  selectOptions,
  defaultValue,
  placeholder,
  children,
  isAppHeader = false,
  filterDropDownStyle,
  formControlStyle,
  menuItemStyle,
  onChange,
  disabled = false,
}) => {
  let DropDownStyleSx = isAppHeader
    ? { ...filterDropDownSharedSx, ...filterDropDownSxAppHeader }
    : { ...filterDropDownSharedSx, ...filterDropDownSxDefault };
  const FormControlStyleSx = isAppHeader
    ? formControlSxAppHeader
    : formControlSxDefault;
  const MenuPropsStyleSx = isAppHeader ? MenuPropsAppHeader : MenuPropsDefault;

  const [selectedFilterValue, setSelectedFilterValue] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedFilterValue(event.target.value as string);
    if (onChange) {
      onChange(event.target.value as string);
    }
  };

  const renderSelectedValue = (selected: string) => {
    if (selected === "") {
      return <span>{placeholder}</span>;
    }
    const matchingOption = selectOptions.find(
      (option) => option.value === selected
    );
    return <StyledSpan>{matchingOption?.title ?? selected}</StyledSpan>;
  };
  const icon = disabled ? ArrowDownIconDissable : ArrowDownIcon;
  const styledMenuListDef = isAppHeader
    ? {}
    : {
        MenuProps: {
          MenuListProps: {
            sx: StyledMenuListSX,
          },
        },
      };
  const dropDownStyleWithBackColor = disabled
    ? { ...DropDownStyleSx, backgroundColor: COLORS.stringHover }
    : DropDownStyleSx;
  return (
    // <Box sx={{ minWidth: 120 }}>
    <FormControl sx={{ ...FormControlStyleSx, ...formControlStyle }}>
      <Select
        MenuProps={MenuPropsStyleSx}
        displayEmpty
        value={selectedFilterValue}
        onChange={handleChange}
        IconComponent={icon}
        sx={{ ...dropDownStyleWithBackColor, ...filterDropDownStyle }}
        renderValue={renderSelectedValue}
        disabled={disabled}
        inputProps={styledMenuListDef}
      >
        {selectOptions.map((option, index) => {
          return (
            <MenuItem
              sx={{ ...menuItemSx, ...menuItemStyle }}
              value={option.value}
              key={index}
            >
              {option.title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
    // </Box>
  );
};

export default FilterDropDown;
