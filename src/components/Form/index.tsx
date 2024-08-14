import { FormEventHandler, useRef } from "react";
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

export default function Form() {
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

        reader.onload = ({ target }) => {
          if (target instanceof FileReader) {
            const { result } = target;
            if (result && typeof result === "string") {
              updatedData.avatar = result;

              dispatch(updateData(updatedData));
              navigate(Path.Root);
            }
          }
        };

        reader.readAsDataURL(updatedData.avatar);
      }
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} ref={formRef}>
      <NameField />
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
