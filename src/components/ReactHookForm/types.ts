import {
  FieldErrors,
  UseFormRegisterReturn,
  UseFormWatch,
} from "react-hook-form";

type RHData = {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  avatar: File;
  country: string;
  terms: true;
};

export type RHErrors = FieldErrors<RHData>;

export type RHFieldProps = {
  registerReturn: UseFormRegisterReturn;
  errors: RHErrors;
  watch?: UseFormWatch<RHData>;
};
export type RHPasswordFieldProps = {
  passwordRegisterReturn: UseFormRegisterReturn;
  confirmPasswordRegisterReturn: UseFormRegisterReturn;
  errors: RHErrors;
  watch?: UseFormWatch<RHData>;
};
