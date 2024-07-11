import { TData } from "../../store/api";
import { toCapitalizeCase, removeUndercheckSymbol } from "../../utils/tools";

import "./Result.css";

export default function Result({ result }: { result: TData[] }) {
  const peopleList = result.map((person, index) => {
    const row = Object.keys(person).map((personField) => (
      <tr className="person-row">
        <td className="person-field">
          {toCapitalizeCase(removeUndercheckSymbol(personField))}
        </td>
        <td className="person-text">{person[personField]}</td>
      </tr>
    ));

    const tableHeading = (
      <thead className="person-heading">
        <tr>
          <td colSpan={2}>№{index + 1}</td>
        </tr>
      </thead>
    );

    return (
      <table className="person-item">
        {tableHeading}
        <tbody>{row}</tbody>
      </table>
    );
  });

  return (
    <div className="result">
      {peopleList.length > 0 ? peopleList : "No matches"}
    </div>
  );
}
