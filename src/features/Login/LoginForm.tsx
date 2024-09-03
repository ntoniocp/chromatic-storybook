import { useState, useRef } from "react";
import { hasErrors, validateEmail, validatePassword } from "../../utils/forms";
import { TextField } from "../../components/TextField/TextField";
import { Button } from "../../components/Button/Button";

type LoginErrors = {
  email?: string;
  password?: string;
};

type SubmitValues = Required<LoginErrors>;

const validators = {
  email: validateEmail,
  password: validatePassword,
};

const noOp = () => null;

interface LoginFormProps {
  onSubmit?: (values: SubmitValues) => void;
}
export function LoginForm({ onSubmit = noOp }: LoginFormProps) {
  const [errors, setErrors] = useState<LoginErrors>({});

  const firstSubmit = useRef<boolean>(true);
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    firstSubmit.current = false;

    const fd = new FormData(ev.currentTarget);
    const values = Object.fromEntries(fd.entries());
    const newErrors: LoginErrors = {};

    for (const key in values) {
      const typedKey = key as keyof LoginErrors;
      newErrors[typedKey] = validators[typedKey](values[key] as string);
    }

    if (hasErrors(newErrors)) {
      setErrors(newErrors);
    } else {
      setErrors({});
      firstSubmit.current = true;
      onSubmit(values as SubmitValues);
    }
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.currentTarget;

    if (!firstSubmit.current) {
      setErrors((prev) => ({
        ...prev,
        [name]: validators[name as keyof LoginErrors](value),
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <TextField
        type="email"
        label="Email"
        name="email"
        error={errors.email}
        onChange={handleChange}
        full
      />
      <TextField
        type="password"
        label="Password"
        name="password"
        error={errors.password}
        onChange={handleChange}
        full
      />
      <Button type="submit" full>
        Log in
      </Button>
    </form>
  );
}
