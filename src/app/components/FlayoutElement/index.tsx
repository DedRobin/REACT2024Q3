import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { useCallback, useEffect, useState } from "react";
import { ResultPayload } from "../Result/slice";
import Button from "../Button";
import { clearResult } from "../Result/slice";
import { saveData } from "./services";
import { store } from "../../../store/store";

type RootState = ReturnType<typeof store.getState>;

export default function FlayoutElement() {
  const selectedPeople = useSelector((state: RootState) => state.results);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedPeople.length) setActive(true);
    else setActive(false);
  }, [selectedPeople]);

  const unselectAll = useCallback(() => {
    dispatch(clearResult());
  }, [dispatch]);

  const download = useCallback(() => {
    const csvArray = [];
    const colums = Object.keys(selectedPeople[0]);

    csvArray.push(`0,${colums.join(",")}`);
    for (let i = 0; i < selectedPeople.length; i++) {
      csvArray.push(`${i + 1},${Object.values(selectedPeople[i])}`);
    }

    const csv = csvArray.join("\n");

    saveData(csv, selectedPeople.length);
  }, [selectedPeople]);

  return (
    <div className={active ? "flayout-element active" : "flayout-element"}>
      <PeopleCounter count={selectedPeople.length} />
      <SelectedPeopleList selectedPeople={selectedPeople} />
      <SelectedButtons unselectAll={unselectAll} download={download} />
    </div>
  );
}

function PeopleCounter({ count }: { count: number }) {
  return (
    <div className="selected-people-counter">{count} items are selected</div>
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

type SelectedButtonsProps = {
  unselectAll: () => void;
  download: () => void;
};

function SelectedButtons({ unselectAll, download }: SelectedButtonsProps) {
  return (
    <div className="selected-buttons">
      <Button
        className="selected-button unselect-all"
        type="button"
        onClick={unselectAll}
      >
        Unselect All
      </Button>
      <Button
        className="selected-button download"
        type="button"
        onClick={download}
      >
        Download
      </Button>
    </div>
  );
}
