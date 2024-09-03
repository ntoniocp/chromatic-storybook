import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  component: TextField,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: "Email",
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    error: "Invalid email address",
  },
};

export const HelperText: Story = {
  args: {
    label: "Password",
    helperText: "Must be at least 6 characters",
  },
};

export const FullWidth: Story = {
  args: {
    label: "Email",
    full: true,
  },
};
