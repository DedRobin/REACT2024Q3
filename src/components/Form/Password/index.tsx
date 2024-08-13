export default function PasswordField() {
  return (
    <div className="field password-fields">
      <div className="password-field">
        <label className="password-label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className="password-input"
          type="password"
          name="password"
        />
      </div>
      <div className="confirm-password-field">
        <label className="confirm-password-label" htmlFor="confirm-password">
          Confirm password
        </label>
        <input
          id="confirm-password"
          className="confirm-password-input"
          type="password"
          name="confirm-password"
        />
      </div>
    </div>
  );
}
