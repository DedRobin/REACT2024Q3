import { FieldProps } from "../types";

export default function GenderField({ errors }: FieldProps) {
  return (
    <div className="field gender-field">
      <label className="gender-label" htmlFor="gender">
        Gender
      </label>
      <select id="gender" className="gender-select" name="gender">
        <option className="option male-option">Male</option>
        <option className="option female-option">Female</option>
      </select>
      {errors && errors.gender ? (
        <div className="error">{errors.gender}</div>
      ) : null}
    </div>
  );
}
