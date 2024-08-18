import { FieldProps } from "../types";

export default function EmailField({ errors }: FieldProps) {
  return (
    <div className="field email-field">
      <label className="email-label" htmlFor="email">
        Email
      </label>
      <input id="email" className="email-input" type="text" name="email" />
      {errors && errors.email ? (
        <div className="error">{errors.email}</div>
      ) : null}
    </div>
  );
}
