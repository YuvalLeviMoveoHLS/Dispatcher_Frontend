import { Meta, StoryObj } from "@storybook/react";
import FilterDropDown from "./filterDropDown";
import {
  filterDropDownSharedSx,
  formControlSxDefault,
  menuItemSx,
} from "./filterDropDown.style";

const meta = {
  title: "Components/Dropdown",
  component: FilterDropDown,
} satisfies Meta<typeof FilterDropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockSelectOptions = [
  { value: "option1", title: "Option 1" },
  { value: "option2", title: "Option 2" },
  { value: "option3", title: "Option 3" },
  { value: "option4", title: "Option 4" },
  { value: "option5", title: "Option 5" },
];

export const Category: Story = {
  args: {
    selectOptions: mockSelectOptions,
    defaultValue: "option1",
    placeholder: "Select an option",
    filterDropDownStyle: { ...filterDropDownSharedSx, borderRadius: "10px" },
    formControlStyle: formControlSxDefault,
    menuItemStyle: menuItemSx,
  },
};
//export const Country :Story
