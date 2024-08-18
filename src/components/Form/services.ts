import { ValidationError } from "yup";
import { Errors, ExtractorFunction, ValidationFunction } from "./types";
import dataSchema from "./schema";

const validate: ValidationFunction = async (data) => {
  const actualErrors: Errors = {};
  try {
    await dataSchema.validate(data, { abortEarly: false, strict: true });
  } catch (error) {
    (error as ValidationError).inner.map((innerError) => {
      const message = innerError.message;
      const field = innerError.path;
      if (field) actualErrors[field] = message;
    });
  }

  return actualErrors;
};

const extract: ExtractorFunction = (formData) => {
  return {
    name: String(formData.get("name")),
    age: Number(formData.get("age")),
    email: String(formData.get("email")),
    password: String(formData.get("password")),
    confirmPassword: String(formData.get("confirm-password")),
    gender: String(formData.get("gender")),
    avatar: formData.get("avatar"),
    country: String(formData.get("country")),
    terms: String(formData.get("terms-and-conditions")) === "on",
  };
};

function noErrors(errors: Errors) {
  return !Object.keys(errors).length;
}

export { validate, extract, noErrors };
