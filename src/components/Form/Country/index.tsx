export default function CountryField() {
  return (
    <label className="label country-label">
      Country
      <select className="country-select">
        <option className="country-option">Belarus</option>
        <option className="country-option">Russia</option>
      </select>
    </label>
  );
}
