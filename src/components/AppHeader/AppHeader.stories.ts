import { Meta, StoryObj } from "@storybook/react";
import AppHeader from "./AppHeader";

export default {
  component: AppHeader,
  title: "Components/AppHeader",
} as Meta;

type Story = StoryObj<typeof AppHeader>;

export const AppHeaderStory: Story = {
  args: {},
};
