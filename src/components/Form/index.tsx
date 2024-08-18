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
import { extract, noErrors, validate } from "./services";

export default function Form() {
  const [errors, setErrors] = useState({});
  const formRef = useRef<HTMLFormElement | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    const form = formRef.current;
    if (form instanceof HTMLFormElement) {
      const formData = new FormData(form);

      const data = extract(formData);

      if (data.avatar instanceof File) {
        const actualErrors = await validate(data);
        setErrors(actualErrors);

        if (noErrors(actualErrors)) {
          const reader = new FileReader();
          reader.readAsDataURL(data.avatar);

          reader.onloadend = async ({ target }) => {
            if (target instanceof FileReader) {
              const { result } = target;
              if (result && typeof result === "string") {
                const avatar = result.split(",")[1] || "";
                data.avatar = avatar;

                delete data.confirmPassword;
                delete data.terms;
                dispatch(updateData(data));
                navigate(Path.Root);
              }
            }
          };
        }
      }
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} ref={formRef}>
      <NameField errors={errors} />
      <AgeField errors={errors} />
      <EmailField errors={errors} />
      <PasswordField errors={errors} />
      <GenderField errors={errors} />
      <AvatarField errors={errors} />
      <CountryField errors={errors} />
      <TermsAndConditionsField errors={errors} />
      <SubmitButton />
    </form>
  );
}
