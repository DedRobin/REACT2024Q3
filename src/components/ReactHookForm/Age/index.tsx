import { RHFieldProps } from "../types";

export default function RHAgeField({ registerReturn, errors }: RHFieldProps) {
  return (
    <div className="field age-field">
      <label className="age-label" htmlFor="age">
        Age
      </label>
      <input
        id="age"
        className="age-input"
        type="number"
        defaultValue="0"
        {...registerReturn}
      />
      <div className="error">{errors.age?.message}</div>
    </div>
  );
}
