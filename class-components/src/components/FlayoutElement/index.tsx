import { useSelector } from "react-redux";
import "./style.css";
import { store } from "../../app/store";
import { useEffect, useState } from "react";

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
      {selectedPeople.map((person, index) => (
        <div key={index} className="selected-person">
          {person.name}
        </div>
      ))}
    </div>
  );
}
