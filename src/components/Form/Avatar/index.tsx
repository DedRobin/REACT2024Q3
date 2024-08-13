export default function AvatarField() {
  return (
    <div className="field avatar-field">
      <label className="avatar-label" htmlFor="avatar">
        Avatar
      </label>
      <input id="avatar" className="avatar-file" type="file" name="avatar" />
    </div>
  );
}
