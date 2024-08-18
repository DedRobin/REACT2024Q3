import { FieldProps } from "../types";

export default function NameField({ errors }: FieldProps) {
  return (
    <div className="field name-field">
      <label className="text-label" htmlFor="name">
        Name
      </label>
      <input id="name" className="text-input" type="text" name="name" />
      {errors && errors.name ? (
        <div className="error">{errors.name}</div>
      ) : null}
    </div>
  );
}
