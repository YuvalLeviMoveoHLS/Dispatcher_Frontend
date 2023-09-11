import { Meta, StoryObj } from "@storybook/react";
import DatePickerComponent from "./DatePickerComponent";

export default {
  component: DatePickerComponent,
  title: "Components/DatePicker",
} as Meta;

type Story = StoryObj<typeof DatePickerComponent>;

export const SearchInputDropdown: Story = {
  args: {},
};
