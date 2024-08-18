import { boolean, object, ObjectSchema, string } from "yup";
import { TData } from "../Data/types";

const dataSchema: ObjectSchema<TData> = object({
  name: string().required("Name is required"),
  age: string().required("Age is required"),
  email: string().required("Email is required"),
  password: string().required("Password is required"),
  gender: string().required("Gender is required"),
  avatar: string().required("Avatar is required"),
  country: string().required("Country is required"),
  terms: boolean()
    .required("Terms and Conditions is required")
    .isTrue("Must be accepted"),
});

export default dataSchema;
