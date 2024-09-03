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
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Submits empty form", async () => {
      const button = await canvas.getByRole("button");
      await userEvent.click(button);
    });

    await step(
      "Shows required errors for email and password respectively",
      async () => {
        await canvas.findByText("Email is required");
        await canvas.findByText("Password is required");
      }
    );
  },
};

export const InvalidEmail: Story = {
  name: "Invalid Submit (Email format)",
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Type invalid email", async () => {
      const emailField = await canvas.getByLabelText("Email");
      await userEvent.type(emailField, "test");
    });

    await step("Type valid password", async () => {
      const passwordField = await canvas.getByLabelText("Password");
      await userEvent.type(passwordField, "12345678");
    });

    await step("Click submit button", async () => {
      const button = await canvas.getByRole("button");
      await userEvent.click(button);
    });

    await step("Shows invalid email address message", async () => {
      await canvas.findByText("Invalid email address");
    });
  },
};

export const InvalidPassword: Story = {
  name: "Invalid Submit (Password length)",
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Type valid email", async () => {
      const emailField = await canvas.getByLabelText("Email");
      await userEvent.type(emailField, "jane@doe.com");
    });

    await step("Type invalid password", async () => {
      const passwordField = await canvas.getByLabelText("Password");
      await userEvent.type(passwordField, "123");
    });

    await step("Submit the form", async () => {
      const button = await canvas.getByRole("button");
      await userEvent.click(button);
    });

    await step("Shows invalid password length message", async () => {
      await canvas.findByText("Password must have at least 8 characters");
    });
  },
};

export const InvalidEmailCorrected: Story = {
  name: "Correcting Invalid Field",
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Enter an invalid email and a valid password", async () => {
      const emailField = await canvas.getByLabelText("Email");
      await userEvent.type(emailField, "jane");

      const passwordField = await canvas.getByLabelText("Password");
      await userEvent.type(passwordField, "12345678");
    });

    await step("Submit the form", async () => {
      const button = await canvas.getByRole("button");
      await userEvent.click(button);
    });

    await step("Gets an invalid email message", async () => {
      await canvas.findByText("Invalid email address");
    });

    await step("Corrects the email", async () => {
      const emailField = await canvas.getByLabelText("Email");
      await userEvent.type(emailField, "@doe.com");
    });

    await step("Invalid email message goes away", async () => {
      const message = await canvas.queryByText("Invalid email address");
      expect(message).not.toBeInTheDocument();
    });
  },
};

const log = spyOn(console, "log");

export const ValidSubmit: Story = {
  args: {
    onSubmit: console.log,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Enter email and password", async () => {
      const emailField = await canvas.getByLabelText("Email");
      await userEvent.type(emailField, "jane@doe.com");

      const passwordField = await canvas.getByLabelText("Password");
      await userEvent.type(passwordField, "12345678");
    });

    await step("Submit form", async () => {
      const button = await canvas.getByRole("button");
      await userEvent.click(button);

      expect(log).toHaveBeenCalledWith({
        email: "jane@doe.com",
        password: "12345678",
      });
    });

    log.mockRestore();
  },
};
