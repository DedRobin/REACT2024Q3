import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect, useRef } from "react";
import { TData } from "./types";
import { srcMetaData } from "./constants";

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
        {Object.entries(current).map(([key, value], index) => {
          return (
            <div
              className={
                previous[key as keyof TData] !== value
                  ? "data-field new"
                  : "data-field"
              }
              key={index}
            >
              <div className="data-key">{key}</div>
              {key === "avatar" && value ? (
                <div className="data-value">
                  <img srcSet={srcMetaData + value} height="200" alt="image" />
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
