import {
  BaseSyntheticEvent,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.css";
import { resultAdded, resultRemoved } from "./slice";
import { store } from "../../../store/store";
import { SwapiData } from "../../../store/apiSlice";
import { ThemeContex } from "../../../views/Main/contex";
import { removeUndercheckSymbol, toCapitalizeCase } from "../../../utils/tools";

type ResultProps = {
  results: SwapiData[];
};
type RootState = ReturnType<typeof store.getState>;
type CallbackOnChange = (event: BaseSyntheticEvent, person: SwapiData) => void;

export default function Results({ results: people }: ResultProps) {
  const [peopleList, setPeopleList] = useState<ReactNode[] | "No matches">();
  const dispatch = useDispatch();
  const peopleStore = useSelector((state: RootState) => state.results);

  const onChange = useCallback(
    (event: BaseSyntheticEvent, person: SwapiData) => {
      const { target } = event;
      if (target instanceof HTMLInputElement) {
        if (target.checked) {
          dispatch(resultAdded({ ...person }));
        } else {
          dispatch(resultRemoved({ name: person.name }));
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

  return (
    <ThemeContex.Consumer>
      {(value) => (
        <div className={value === "light" ? "people light" : "people dark"}>
          {peopleList}
        </div>
      )}
    </ThemeContex.Consumer>
  );
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
        checked={checked}
        onChange={(event: BaseSyntheticEvent) => onChange(event, person)}
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
        <td className="person-text">{person[field as keyof SwapiData]}</td>
      </tr>
    </tbody>
  );
}
