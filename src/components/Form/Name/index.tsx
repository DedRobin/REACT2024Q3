export default function NameField() {
  return (
    <div className="field name-field">
      <label className="text-label" htmlFor="name">
        Name
      </label>
      <input id="name" className="text-input" type="text" name="name" />
    </div>
  );
}
