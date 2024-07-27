import {
  BaseSyntheticEvent,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.css";
import { toCapitalizeCase, removeUndercheckSymbol } from "../../utils/tools";
import { resultAdded, resultRemoved } from "./slice";
import { store } from "../../app/store";
import { SwapiData } from "../../store/apiSlice";

type ResultProps = {
  results: SwapiData[];
};
type RootState = ReturnType<typeof store.getState>;
type CallbackOnChange = (event: BaseSyntheticEvent, personName: string) => void;

export default function Result({ results: people }: ResultProps) {
  const [peopleList, setPeopleList] = useState<ReactNode[] | "No matches">();
  const dispatch = useDispatch();
  const peopleStore = useSelector((state: RootState) => state.results);

  const onChange = useCallback(
    (event: BaseSyntheticEvent, personName: string) => {
      const { target } = event;
      if (target instanceof HTMLInputElement) {
        if (target.checked) {
          dispatch(resultAdded({ name: personName }));
        } else {
          dispatch(resultRemoved({ name: personName }));
        }
      }
    },
    [dispatch],
  );

  useEffect(() => {
    const updatedPeopleList = people.map((person, index): ReactNode => {
      const personName = person.name;
      const checked = !!peopleStore.find(
        (personFromStore) => personFromStore.name === personName,
      );

      const rows = Object.keys(person)
        .slice(0, 8)
        .map((personField, index) => (
          <Row key={index} index={index} person={person} field={personField} />
        ));

      return (
        <Table
          key={index}
          person={person}
          checked={checked}
          onChange={onChange}
        >
          {rows}
        </Table>
      );
    });

    if (!updatedPeopleList.length) setPeopleList("No matches");
    else setPeopleList(updatedPeopleList);
  }, [onChange, people, peopleStore]);

  return <div className="people">{peopleList}</div>;
}

type TableProps = {
  person: SwapiData;
  checked: boolean;
  onChange: CallbackOnChange;
  children: JSX.Element[];
};

function Table({ person, checked, onChange, children }: TableProps) {
  return (
    <div className="person-item">
      <input
        className="person-checkbox"
        name={person.name}
        type="checkbox"
        defaultChecked={checked}
        checked={checked}
        onChange={(event: BaseSyntheticEvent) => onChange(event, person.name)}
      />
      <table className="person-table">{children}</table>
    </div>
  );
}

type RowProps = { index: number; person: SwapiData; field: string };

function Row({ index, person, field }: RowProps) {
  return (
    <tbody key={index}>
      <tr className="person-row">
        <td className="person-field">
          {toCapitalizeCase(removeUndercheckSymbol(field))}
        </td>
        <td className="person-text">{person[field]}</td>
      </tr>
    </tbody>
  );
}
