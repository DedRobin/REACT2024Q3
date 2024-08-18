import { RHFieldProps } from "../types";

export default function RHAvatarField({
  registerReturn,
  errors,
}: RHFieldProps) {
  return (
    <div className="field avatar-field">
      <label className="avatar-label" htmlFor="avatar">
        Avatar
      </label>
      <input
        id="avatar"
        className="avatar-file"
        type="file"
        {...registerReturn}
      />
      <div className="error">{errors.avatar?.message}</div>
    </div>
  );
}
