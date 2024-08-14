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
      const name = String(formData.get("name"));
      const age = String(formData.get("age"));
      const email = String(formData.get("email"));
      const password = String(formData.get("password"));
      const gender = String(formData.get("gender"));
      const avatar = String(formData.get("avatar"));
      const country = String(formData.get("country"));

      const updatedData = {
        name,
        age,
        email,
        password,
        gender,
        avatar,
        country,
      };

      dispatch(updateData(updatedData));
      navigate(Path.Root);
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
