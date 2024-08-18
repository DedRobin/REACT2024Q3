import { useSelector } from "react-redux";
import { FormEventHandler, MouseEventHandler, useState } from "react";
import { RHFieldProps } from "../types";
import { selectAllCountries } from "../../Form/Country/selectors";

export default function RHCountryField({
  registerReturn,
  errors,
  watch,
}: RHFieldProps) {
  const [country, setCountry] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const countryList = useSelector(selectAllCountries);

  const onChange: FormEventHandler = () => {
    if (watch) {
      const value = watch("country");
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
    <div className="field country-field" onChange={onChange}>
      <label className="country-label" htmlFor="country">
        Country
      </label>
      <input
        id="country"
        className="country-input"
        value={country}
        {...registerReturn}
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
      <div className="error">{errors.country?.message}</div>
    </div>
  );
}
