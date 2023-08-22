import { Meta, StoryObj } from "@storybook/react";
import StyledButton from "./styledButton";
import { buttonSx } from "./styledButton.style";

const meta = {
  title: "Components/Button",
  component: StyledButton,
} satisfies Meta<typeof StyledButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    children: "NAVIGATE TO DISPATCH",
    // type: "primary",
    sx: buttonSx,
    // url: ""
    // onClick: () => console.log("Clicked"),
  },
};

//from doc of storybook
// // Button.stories.ts|tsx

// // Replace your-framework with the name of your framework
// import type { Meta, StoryObj } from '@storybook/your-framework';

// import { Button } from './Button';

// const meta: Meta<typeof Button> = {
//   component: Button,
// };

// export default meta;
// type Story = StoryObj<typeof Button>;

// export const Primary: Story = {
//   args: {
//     variant: 'primary',
//   },
// };
