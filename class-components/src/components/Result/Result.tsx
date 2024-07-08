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
    return (
      <table className="person-item">
        <thead className="person-heading">№{index + 1}</thead>
        {row}
      </table>
    );
  });

  return <div className="people-list">{peopleList}</div>;
}
