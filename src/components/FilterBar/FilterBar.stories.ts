import { Meta, StoryObj } from "@storybook/react";
import FilterBar from "./FilterBar";

const meta = {
  title: "Components/FilterBar",
  component: FilterBar,
} satisfies Meta<typeof FilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilterBarStory: Story = {
  args: {},
};
