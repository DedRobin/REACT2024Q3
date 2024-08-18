import { FieldProps } from "../types";

export default function TermsAndConditionsField({ errors }: FieldProps) {
  return (
    <div className="field terms-and-conditions-field">
      <input
        id="terms-and-conditions"
        className="terms-and-conditions-checkbox"
        type="checkbox"
        name="terms-and-conditions"
      />
      <label
        className="label terms-and-conditions-label"
        htmlFor="terms-and-conditions"
      >
        accept Terms and Conditions
      </label>
      {errors && errors.terms ? (
        <div className="error">{errors.terms}</div>
      ) : null}
    </div>
  );
}
