import { RHFieldProps } from "../types";

export default function RHEmailField({ registerReturn, errors }: RHFieldProps) {
  return (
    <div className="field email-field">
      <label className="email-label" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        className="email-input"
        type="text"
        {...registerReturn}
      />
      <div className="error">{errors.email?.message}</div>
    </div>
  );
}
