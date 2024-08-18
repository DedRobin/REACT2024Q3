import { boolean, number, object, ObjectSchema, ref, string } from "yup";
import { TData } from "../Data/types";

const dataSchema: ObjectSchema<TData> = object({
  name: string()
    .matches(/^[A-Z].*/, "First letter must be uppercase")
    .required("Name is required"),
  age: number()
    .min(0, "Age must be more than or equal to 0")
    .required("Age is required"),
  email: string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email must look like 'example@mail.com'",
    )
    .required("Email is required"),
  password: string()
    .matches(/[0-9]/, "Must contain one number")
    .matches(/[A-Z]/, "Must contain one uppercase letter")
    .matches(/[a-z]/, "Must contain one lowercase letter")
    .matches(
      /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/,
      "Must contain one special characters",
    )
    .required("Password is required"),
  confirmPassword: string()
    .required("Confirm Password is required")
    .oneOf([ref("password")], "Passwords must match"),
  gender: string().required("Gender is required"),
  avatar: string().required("Avatar is required"),
  country: string().required("Country is required"),
  terms: boolean()
    .required("Terms and Conditions is required")
    .isTrue("Must be accepted"),
});

export default dataSchema;
