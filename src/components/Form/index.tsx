import { FormEventHandler, useRef, useState } from "react";
import AgeField from "./Age";
import AvatarField from "./Avatar";
import CountryField from "./Country";
import EmailField from "./Email";
import GenderField from "./Gender";
import NameField from "./Name";
import PasswordField from "./Password";
import SubmitButton from "./SubmitButton";
import TermsAndConditionsField from "./T&C";
import { useDispatch } from "react-redux";
import { updateData } from "../Data/slice";
import { useNavigate } from "react-router-dom";
import { Path } from "../../views/router";
import dataSchema from "./schema";
import { ValidationError } from "yup";

export default function Form() {
  const [errors, setErrors] = useState({});
  const formRef = useRef<HTMLFormElement | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    const form = formRef.current;
    if (form instanceof HTMLFormElement) {
      const formData = new FormData(form);

      const updatedData = {
        name: String(formData.get("name")),
        age: String(formData.get("age")),

        email: String(formData.get("email")),
        password: String(formData.get("password")),
        gender: String(formData.get("gender")),
        avatar: formData.get("avatar"),
        country: String(formData.get("country")),
      };

      if (updatedData.avatar instanceof File) {
        const reader = new FileReader();

        reader.onload = async ({ target }) => {
          if (target instanceof FileReader) {
            const { result } = target;
            if (result && typeof result === "string") {
              const avatar = result.split("/")[2] || "";
              updatedData.avatar = avatar;

              const actualErrors = {};
              try {
                await dataSchema.validate(updatedData, { abortEarly: false });
              } catch (error) {
                (error as ValidationError).inner.map((innerError) => {
                  const message = innerError.message;
                  const field = innerError.path;
                  if (field) actualErrors[field] = message;
                });
              }

              setErrors(actualErrors);

              if (!Object.keys(actualErrors).length) {
                dispatch(updateData(updatedData));
                navigate(Path.Root);
              }
            }
          }
        };

        reader.readAsDataURL(updatedData.avatar);
      }
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} ref={formRef}>
      <NameField errors={errors} />
      <AgeField />
      <EmailField />
      <PasswordField />
      <GenderField />
      <AvatarField />
      <CountryField />
      <TermsAndConditionsField />
      <SubmitButton />
    </form>
  );
}
