import type { Meta, StoryObj } from "@storybook/react";
import { fn, within, userEvent, expect, spyOn } from "@storybook/test";

import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  args: {
    onSubmit: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {},
};

export const InvalidRequired: Story = {
  name: "Invalid Submit (Required)",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button");
    await userEvent.click(button);

    await canvas.findByText("Email is required");
    await canvas.findByText("Password is required");
  },
};

export const InvalidEmail: Story = {
  name: "Invalid Submit (Email format)",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailField = await canvas.getByLabelText("Email");
    await userEvent.type(emailField, "test");

    const passwordField = await canvas.getByLabelText("Password");
    await userEvent.type(passwordField, "12345678");

    const button = await canvas.getByRole("button");
    await userEvent.click(button);

    await canvas.findByText("Invalid email address");
  },
};

export const InvalidPassword: Story = {
  name: "Invalid Submit (Password length)",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailField = await canvas.getByLabelText("Email");
    await userEvent.type(emailField, "jane@doe.com");

    const passwordField = await canvas.getByLabelText("Password");
    await userEvent.type(passwordField, "123");

    const button = await canvas.getByRole("button");
    await userEvent.click(button);

    await canvas.findByText("Password must have at least 8 characters");
  },
};

export const InvalidEmailCorrected: Story = {
  name: "Correcting Invalid Field",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailField = await canvas.getByLabelText("Email");
    await userEvent.type(emailField, "jane");

    const passwordField = await canvas.getByLabelText("Password");
    await userEvent.type(passwordField, "12345678");

    const button = await canvas.getByRole("button");
    await userEvent.click(button);

    await canvas.findByText("Invalid email address");
    await userEvent.type(emailField, "@doe.com");
  },
};

const log = spyOn(console, "log");

export const ValidSubmit: Story = {
  args: {
    onSubmit: console.log,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailField = await canvas.getByLabelText("Email");
    await userEvent.type(emailField, "jane@doe.com");

    const passwordField = await canvas.getByLabelText("Password");
    await userEvent.type(passwordField, "12345678");

    const button = await canvas.getByRole("button");
    await userEvent.click(button);

    expect(log).toHaveBeenCalledWith({
      email: "jane@doe.com",
      password: "12345678",
    });

    log.mockRestore();
  },
};
