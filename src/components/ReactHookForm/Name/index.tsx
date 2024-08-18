import { RHFieldProps } from "../types";

export default function RHNameField({ registerReturn, errors }: RHFieldProps) {
  return (
    <div className="field name-field">
      <label className="text-label" htmlFor="name">
        Name
      </label>
      <input id="name" className="text-input" type="text" {...registerReturn} />
      <div className="error">{errors.name?.message}</div>
    </div>
  );
}
