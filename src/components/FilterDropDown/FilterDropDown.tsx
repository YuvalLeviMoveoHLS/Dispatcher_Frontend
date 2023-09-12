import { FC, ReactNode, useState } from "react";
import { SxProps } from "@mui/material";
// import InputLabel from "@mui/material/InputLabel";
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
} from "./FilterDropDown.style";
import { SelectOption } from "../../models/SelectOption";

type FilterDropDownProps = {
  selectOptions: SelectOption[];
  defaultValue?: string;
  placeholder?: string;
  children?: ReactNode;
  isAppHeader?: boolean;
  filterDropDownStyle?: SxProps;
  formControlStyle?: SxProps;
  menuItemStyle?: SxProps;
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
}) => {
  const DropDownStyleSx = isAppHeader
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

  return (
    // <Box sx={{ minWidth: 120 }}>
    <FormControl sx={{ ...FormControlStyleSx, ...formControlStyle }}>
      <Select
        MenuProps={MenuPropsStyleSx}
        displayEmpty
        value={selectedFilterValue}
        onChange={handleChange}
        IconComponent={ArrowDownIcon}
        sx={{ ...DropDownStyleSx, ...filterDropDownStyle }}
        renderValue={renderSelectedValue}
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
