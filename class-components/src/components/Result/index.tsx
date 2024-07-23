import { ReactNode, useEffect, useState } from "react";
import { TData } from "../../store/api";
import { toCapitalizeCase, removeUndercheckSymbol } from "../../utils/tools";

import "./style.css";

type TResult = { result: TData[] };

export default function Result({ result }: TResult) {
  const [peopleList, setPeopleList] = useState<ReactNode[] | "No matches">();

  useEffect(() => {
    const updatedPeopleList = result.map((person, index): ReactNode => {
      const tableRow = Object.keys(person).map((personField, index) => (
        <tbody key={index}>
          <tr className="person-row">
            <td className="person-field">
              {toCapitalizeCase(removeUndercheckSymbol(personField))}
            </td>
            <td className="person-text">{person[personField]}</td>
          </tr>
        </tbody>
      ));

      return (
        <table key={index} className="person-item">
          <input
            className="person-checkbox"
            name={person.name}
            type="checkbox"
          />
          {tableRow}
        </table>
      );
    });

    if (!updatedPeopleList.length) setPeopleList("No matches");
    else setPeopleList(updatedPeopleList);
  }, [result]);

  return <div className="result">{peopleList}</div>;
}
