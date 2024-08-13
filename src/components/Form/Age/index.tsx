export default function AgeField() {
  return (
    <div className="field age-field">
      <label className="age-label" htmlFor="age">
        Age
      </label>
      <input id="age" className="age-input" type="number" name="age" />
    </div>
  );
}
