import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import { TFormData } from "./types";
import { getInitialState } from "./slice";

export default function Data() {
  const [previousData, setPreviousData] =
    useState<TFormData>(getInitialState());
  const data = useSelector((state: RootState) => state.data);

  useEffect(() => {
    setTimeout(() => setPreviousData(data), 3000);
  }, [data]);

  return (
    <>
      <h2>Submitted form data</h2>
      <div className="data">
        {Object.entries(data).map(([key, value], index) => {
          return (
            <div
              className={
                previousData[key as keyof TFormData] !== value
                  ? "data-field new"
                  : "data-field"
              }
              key={index}
            >
              <div className="data-key">{key}</div>
              {key === "avatar" && value ? (
                <div className="data-value">
                  <img srcSet={value} alt="image" />
                </div>
              ) : (
                <div className="data-value">{value}</div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
