export default function GenderField() {
  return (
    <label className="label gender-label">
      Gender
      <select className="gender-select">
        <option className="option male-option">Male</option>
        <option className="option female-option">Female</option>
      </select>
    </label>
  );
}
