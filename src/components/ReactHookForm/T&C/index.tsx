import { RHFieldProps } from "../types";

export default function RHTermsAndConditionsField({
  registerReturn,
  errors,
}: RHFieldProps) {
  return (
    <div className="field terms-and-conditions-field">
      <input
        id="terms-and-conditions"
        className="terms-and-conditions-checkbox"
        type="checkbox"
        {...registerReturn}
      />
      <label
        className="label terms-and-conditions-label"
        htmlFor="terms-and-conditions"
      >
        accept Terms and Conditions
      </label>
      <div className="error">{errors.terms?.message}</div>
    </div>
  );
}
