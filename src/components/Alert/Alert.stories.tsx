import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  component: Alert,
  tags: ["autodocs"],
  args: {
    onCloseClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    type: "success",
    text: "Success! Your account has been created.",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    text: "Error processing your last action",
  },
};
