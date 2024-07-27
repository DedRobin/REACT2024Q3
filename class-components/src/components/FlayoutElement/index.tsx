import { useSelector } from "react-redux";
import "./style.css";
import { store } from "../../app/store";
import { useEffect, useState } from "react";
import { ResultPayload } from "../Result/slice";
import Button from "../Button";

type RootState = ReturnType<typeof store.getState>;

export default function FlayoutElement() {
  const selectedPeople = useSelector((state: RootState) => state.results);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (selectedPeople.length) setActive(true);
    else setActive(false);
  }, [selectedPeople]);

  return (
    <div className={active ? "flayout-element active" : "flayout-element"}>
      <PeopleCounter count={selectedPeople.length} />
      <SelectedPeopleList selectedPeople={selectedPeople} />
      <SelectedButtons />
    </div>
  );
}

function PeopleCounter({ count }: { count: number }) {
  return (
    <div className="selected-people-counter">Items are selected: {count}</div>
  );
}

function SelectedPeopleList({
  selectedPeople,
}: {
  selectedPeople: ResultPayload[];
}) {
  return (
    <ul className="selected-people-list">
      {selectedPeople.map((person, index) => (
        <li key={index} className="selected-person-item">
          {person.name}
        </li>
      ))}
    </ul>
  );
}

function SelectedButtons() {
  return (
    <div className="selected-buttons">
      <Button className="selected-button unselect-all" type="button">
        Unselect All
      </Button>
      <Button className="selected-button download" type="button">
        Download
      </Button>
    </div>
  );
}
