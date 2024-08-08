import {
  BaseSyntheticEvent,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import { resultAdded, resultRemoved } from "./slice";
import { SwapiData } from "@/store/apiSlice";
import { store } from "@/store/store";
import { removeUndercheckSymbol, toCapitalizeCase } from "@/utils/tools";
import { ThemeContex } from "../Main/contex";
import Link from "next/link";

type ResultProps = {
  results: SwapiData[];
  children: JSX.Element | JSX.Element[];
};
type RootState = ReturnType<typeof store.getState>;
type CallbackOnChange = (event: BaseSyntheticEvent, person: SwapiData) => void;

export default function Results({ results: people, children }: ResultProps) {
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
          <div className="people-list">{peopleList}</div>
          {children}
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
  const personId = person.url.split("/").at(-2);

  return (
    <div className="person-item">
      <input
        className="person-checkbox"
        name={person.name}
        type="checkbox"
        checked={checked}
        onChange={(event: BaseSyntheticEvent) => onChange(event, person)}
      />
      <Link href={"/person/" + personId} className="person-data">
        <table className="person-table">{children}</table>
      </Link>
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

Results.getLayout = function getLayout(page: ReactElement) {
  return page;
};
