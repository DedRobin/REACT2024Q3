import { TDataProps } from "./types";

export default function Data({ data }: TDataProps) {
  return (
    <>
      <h2>Submitted form data</h2>
      <div className="data">
        {Object.entries(data).map(([key, value], index) => {
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
