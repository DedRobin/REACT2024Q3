import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function CountryField() {
  const countryList = useSelector((state: RootState) => state.country);

  return (
    <div className="field country-field">
      <label className="country-label" htmlFor="country">
        Country
      </label>
      <select id="country" className="country-select" name="country">
        {countryList.map((countryName) => (
          <option className="country-option">{countryName}</option>
        ))}
        <option className="country-option">Belarus</option>
        <option className="country-option">Russia</option>
      </select>
    </div>
  );
}
