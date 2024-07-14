import { ReactNode, useEffect, useState } from "react";
import { TData } from "../../store/api";
import { toCapitalizeCase, removeUndercheckSymbol } from "../../utils/tools";

import "./style.css";

type TResult = { result: TData[]; offset: number };

export default function Result({ result, offset }: TResult) {
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

      const tableHeading = (
        <thead className="person-heading">
          <tr>
            <td colSpan={2}>№{index + 1 + offset}</td>
          </tr>
        </thead>
      );

      return (
        <table key={index} className="person-item">
          {tableHeading}
          {tableRow}
        </table>
      );
    });

    if (!updatedPeopleList.length) setPeopleList("No matches");
    else setPeopleList(updatedPeopleList);
  }, [offset, result]);

  return <div className="result">{peopleList}</div>;
}
