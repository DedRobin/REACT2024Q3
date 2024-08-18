import { RHFieldProps } from "../types";

export default function RHGenderField({
  registerReturn,
  errors,
}: RHFieldProps) {
  return (
    <div className="field gender-field">
      <label className="gender-label" htmlFor="gender">
        Gender
      </label>
      <select id="gender" className="gender-select" {...registerReturn}>
        <option className="option male-option">Male</option>
        <option className="option female-option">Female</option>
      </select>
      <div className="error">{errors.gender?.message}</div>
    </div>
  );
}
