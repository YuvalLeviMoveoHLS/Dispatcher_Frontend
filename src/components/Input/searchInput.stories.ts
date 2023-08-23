import { Meta, StoryObj } from "@storybook/react";
import SearchInput from "./searchInput";

const meta = {
  title: "Components/SearchInput",
  component: SearchInput,
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Input: Story = {
  args: {
    placeholder: "Search",
  },
};
