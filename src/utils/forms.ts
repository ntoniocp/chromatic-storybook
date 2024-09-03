export function validateEmail(email: string) {
  if (!email) return "Email is required";

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return "Invalid email address";
  }
}

export function validatePassword(password: string) {
  if (!password) return "Password is required";
  if (password.length < 8) return "Password must have at least 8 characters";
}

type BaseErrors = Record<string, string | undefined>;

export function hasErrors<ErrorsObj extends BaseErrors>(errors: ErrorsObj) {
  return Object.values(errors).some(Boolean);
}
