import type { Meta, StoryObj } from "@storybook/react";
import RecentSearchDropdown from "./RecentSearchDropdown";
import { recentSearchesMock } from "../../mockData/recentSearches";

const meta = {
  title: "COMPONENTS/RecentSearchDropdown",
  component: RecentSearchDropdown,
  //tags: ["autodocs"],
} satisfies Meta<typeof RecentSearchDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RecentSearchStory: Story = {
  args: {
    searches: recentSearchesMock,
  },
};
