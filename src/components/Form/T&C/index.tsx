export default function TermsAndConditionsField() {
  return (
    <div className="field terms-and-conditions-field">
      <input
        id="terms-and-conditions"
        className="terms-and-conditions-checkbox"
        type="checkbox"
        name="terms-and-conditions"
      />
      <label className="label terms-and-conditions-label">
        accept Terms and Conditions
      </label>
    </div>
  );
}
