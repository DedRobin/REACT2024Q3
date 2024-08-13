export default function EmailField() {
  return (
    <div className="field email-field">
      <label className="email-label" htmlFor="email">
        Email
      </label>
      <input id="email" className="email-input" type="email" name="email" />
    </div>
  );
}
