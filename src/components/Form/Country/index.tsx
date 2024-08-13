export default function CountryField() {
  return (
    <div className="field country-field">
      <label className="country-label" htmlFor="country">
        Country
      </label>
      <select id="country" className="country-select" name="country">
        <option className="country-option">Belarus</option>
        <option className="country-option">Russia</option>
      </select>
    </div>
  );
}
