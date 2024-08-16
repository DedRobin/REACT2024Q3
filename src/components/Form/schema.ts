import { object, string } from "yup";
// const dataSchema: ObjectSchema<TData> = object({

const dataSchema = object({
  name: string().required("Name is required"),
  age: string().required("Age is required"),
  email: string().required("Email is required"),
});

export default dataSchema;
