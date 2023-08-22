import { useState } from "react";
import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ArrowDownIcon from "../../assets/icon-tsx/arrowDownIcon";

export interface SelectOption {
  value: string;
  title: string;
}

interface CoolSelectDropdownProps {
  selectOptions: SelectOption[];
  defaultValue?: string;
  placeholder?: string;
}

export default function CoolSelectDropdown({
  selectOptions,
  defaultValue,
  placeholder,
}: CoolSelectDropdownProps) {
  const [selectOptionValue, setSelectOptionValue] = useState(defaultValue);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectOptionValue(event.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          placeholder={placeholder}
          id="demo-simple-select"
          value={defaultValue}
          defaultValue={defaultValue}
          label="Age"
          onChange={handleChange}
          IconComponent={ArrowDownIcon}
        >
          {selectOptions.map((option) => {
            return <MenuItem value={option.value}>{option.title}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
