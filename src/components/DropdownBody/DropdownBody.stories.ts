import type { Meta, StoryObj } from "@storybook/react";
import DropdownBody from "./DropdownBody";
import { recentSearchesMock } from "../../mockData/RecentSearches";

const meta = {
  title: "COMPONENTS/DropdownBody",
  component: DropdownBody,
  //tags: ["autodocs"],
} satisfies Meta<typeof DropdownBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RecentSearchStory: Story = {
  args: {
    searches: recentSearchesMock,
  },
};
