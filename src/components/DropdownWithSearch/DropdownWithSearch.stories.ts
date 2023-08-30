import { Meta, StoryObj } from "@storybook/react";
import DropdownWithSearch from "./DropdownWithSearch";

const meta = {
  title: "Components/DropdownWithSearch",
  component: DropdownWithSearch,
} satisfies Meta<typeof DropdownWithSearch>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Input: Story = {};
