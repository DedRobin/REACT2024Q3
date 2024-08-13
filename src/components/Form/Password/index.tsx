export default function PasswordField() {
  return (
    <div className="password-wrapper">
      <label className="label password-label">
        Password
        <input className="password-input" type="password" name="password" />
      </label>
      <label className="label confirm-password-label">
        Confirm password
        <input
          className="confirm-password-input"
          type="password"
          name="confirm-password"
        />
      </label>
    </div>
  );
}
