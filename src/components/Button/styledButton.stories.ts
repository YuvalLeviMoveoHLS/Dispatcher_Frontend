import { Meta, StoryObj } from "@storybook/react";
import StyledButton from "./StyledButton";
import { buttonSx } from "./StyledButton.style";

const meta = {
  title: "Components/Button",
  component: StyledButton,
} satisfies Meta<typeof StyledButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    children: "NAVIGATE TO DISPATCH",
    sx: buttonSx,
  },
};
