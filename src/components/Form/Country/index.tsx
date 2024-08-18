import { useSelector } from "react-redux";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { selectAllCountries } from "./selectors";
import { FieldProps } from "../types";

export default function CountryField({ errors }: FieldProps) {
  const [country, setCountry] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const countryList = useSelector(selectAllCountries);

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
        {countryList.map((countryName, index) => {
          if (searchValue && countryName.includes(searchValue)) {
            return (
              <li className="country-item" key={index}>
                {countryName}
              </li>
            );
          }
        })}
      </ul>
      {errors && errors.country ? (
        <div className="error">{errors.country}</div>
      ) : null}
    </div>
  );
}
