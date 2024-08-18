import { ReactHookFieldProps } from "../types";

export default function ReactHookNameField({
  registerReturn,
  errors,
}: ReactHookFieldProps) {
  return (
    <div className="field name-field">
      <label className="text-label" htmlFor="name">
        Name
      </label>
      <input {...registerReturn} />
      <div className="error">{errors.name?.message}</div>
    </div>
  );
}
