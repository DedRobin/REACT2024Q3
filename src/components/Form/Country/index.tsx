import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";

export default function CountryField() {
  const [country, setCountry] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const countryList = useSelector((state: RootState) =>
    state.country.filter((name) => searchValue && name.includes(searchValue)),
  );

  const onChange: ChangeEventHandler = ({ target }) => {
    if (target instanceof HTMLInputElement) {
      const { value } = target;
      setSearchValue(value);
      setCountry(value);
    }
  };

  const onClick: MouseEventHandler = ({ target }) => {
    if (
      target instanceof HTMLLIElement &&
      target.className === "country-item"
    ) {
      const { textContent } = target;
      if (textContent) {
        setCountry(textContent);
        setSearchValue("");
      }
    }
  };

  return (
    <div className="field country-field">
      <label className="country-label" htmlFor="country">
        Country
      </label>
      <input
        id="country"
        className="country-input"
        name="country"
        onChange={onChange}
        value={country}
      />
      <ul className="autocomplete-country-list" onClick={onClick}>
        {countryList.map((countryName) => (
          <li className="country-item">{countryName}</li>
        ))}
      </ul>
    </div>
  );
}
