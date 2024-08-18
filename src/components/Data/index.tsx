import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect, useRef } from "react";
import { TData } from "./types";
import { srcMetaData } from "./constants";
import { getInitialState } from "./slice";

export default function Data() {
  const { previous, current } = useSelector((state: RootState) => state.data);
  const ref = useRef<HTMLDivElement | null>(null);

  const resetNew = (element: HTMLElement) => {
    const fields = element.querySelectorAll(".data-field");
    fields.forEach((field) => {
      field.classList.remove("new");
    });
  };

  useEffect(() => {
    const elements = ref.current;
    if (elements instanceof HTMLElement) {
      setTimeout(() => resetNew(elements), 2000);
    }
  }, [current]);

  return (
    <>
      <h2>Submitted form data</h2>
      <div className="data" ref={ref}>
        {Object.keys(getInitialState().current).map((field, index) => {
          return (
            <div
              className={
                previous[field as keyof TData] !== current[field as keyof TData]
                  ? "data-field new"
                  : "data-field"
              }
              key={index}
            >
              <div className="data-key">{field}</div>
              {field === "avatar" && current[field] ? (
                <div className="data-value">
                  <img
                    srcSet={srcMetaData + current[field]}
                    height="200"
                    alt="image"
                  />
                </div>
              ) : (
                <div className="data-value">
                  {current[field as keyof TData]}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
