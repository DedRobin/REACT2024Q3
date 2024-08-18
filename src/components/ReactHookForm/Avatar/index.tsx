import { FieldProps } from "../types";

export default function AvatarField({ errors }: FieldProps) {
  return (
    <div className="field avatar-field">
      <label className="avatar-label" htmlFor="avatar">
        Avatar
      </label>
      <input id="avatar" className="avatar-file" type="file" name="avatar" />
      {errors && errors.avatar ? (
        <div className="error">{errors.avatar}</div>
      ) : null}
    </div>
  );
}
