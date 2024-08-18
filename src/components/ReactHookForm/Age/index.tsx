import { FieldProps } from "../types";

export default function AgeField({ errors }: FieldProps) {
  return (
    <div className="field age-field">
      <label className="age-label" htmlFor="age">
        Age
      </label>
      <input id="age" className="age-input" type="number" name="age" />
      {errors && errors.age ? <div className="error">{errors.age}</div> : null}
    </div>
  );
}
