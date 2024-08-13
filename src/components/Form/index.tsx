import AgeField from "./Age";
import AvatarField from "./Avatar";
import CountryField from "./Country";
import EmailField from "./Email";
import GenderField from "./Gender";
import NameField from "./Name";
import PasswordField from "./Password";
import SubmitButton from "./SubmitButton";
import TermsAndConditionsField from "./T&C";

export default function Form() {
  return (
    <form className="form">
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
