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
  { value: "Israel", title: "Israel" },
  { value: "Portugal", title: "Portugal" },
  { value: "England", title: "England" },
  { value: "Spain", title: "Spain" },
  { value: "Denmark", title: "Denmark" },
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
