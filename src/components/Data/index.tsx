import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function Data() {
  const state = useSelector((state: RootState) => state);

  return (
    <>
      <h2>Submitted form data</h2>
      <div className="data">
        {Object.entries(state.data).map(([key, value], index) => {
          return (
            <div className="data-field" key={index}>
              <div className="data-key">{key}</div>
              <div className="data-value">{value}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
