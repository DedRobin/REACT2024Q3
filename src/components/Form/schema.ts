import { boolean, mixed, number, object, ref, string } from "yup";

const VALID_TYPES = ["image/jpg", "image/jpeg", "image/png"];
const VALID_SIZE = 2_000_000;

const dataSchema = object({
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
  avatar: mixed<File>()
    .test(
      "File size test",
      `File size must be less then '${VALID_SIZE}'`,
      validateSize,
    )
    .test("File type test", `File type must be '${VALID_TYPES}'`, validateType)
    .required("Avatar is required"),
  country: string().required("Country is required"),
  terms: boolean()
    .required("Terms and Conditions is required")
    .isTrue("Must be accepted"),
});

function validateSize(file?: File) {
  let valid = true;
  if (file && file.size >= VALID_SIZE) valid = false;
  return valid;
}

function validateType(file?: File | FileList) {
  let valid = true;
  if (file instanceof File && !VALID_TYPES.includes(file.type)) valid = false;
  if (
    file instanceof FileList &&
    (!file.length || !VALID_TYPES.includes(file[0].type))
  )
    valid = false;

  return valid;
}

export default dataSchema;
