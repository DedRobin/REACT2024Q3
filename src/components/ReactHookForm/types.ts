import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";

export type ReactHookErrors = FieldErrors<{
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  avatar: File;
  country: string;
  terms: true;
}>;

export type ReactHookFieldProps = {
  registerReturn: UseFormRegisterReturn;
  errors: ReactHookErrors;
};
