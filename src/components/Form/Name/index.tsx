import { TData } from "../../Data/types";

export default function NameField({
  errors,
}: {
  errors: TData | Record<string, never>;
}) {
  return (
    <div className="field name-field">
      <label className="text-label" htmlFor="name">
        Name
      </label>
      <input id="name" className="text-input" type="text" name="name" />
      {errors && errors.name ? (
        <div style={{ color: "red" }}>{errors.name}</div>
      ) : null}
    </div>
  );
}
