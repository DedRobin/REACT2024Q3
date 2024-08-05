import { useGetCharacterByIdQuery } from "@/store/apiSlice";
import "./style.css";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import { removeUndercheckSymbol, toCapitalizeCase } from "@/utils/tools";

type ResultProps = {
  personId: string;
};

export default function Result({ personId }: ResultProps) {
  const [active, setActive] = useState(Boolean(personId));
  const {
    data: personData,
    isLoading,
    isFetching,
  } = useGetCharacterByIdQuery(personId);

  useEffect(() => setActive(Boolean(personId)), [personId]);

  return (
    <div className={active ? "person-card active" : "person-card"}>
      {isLoading || isFetching ? (
        <Loader />
      ) : (
        <>
          {personData ? (
            <ul>
              {Object.entries(personData).map((item, index) => (
                <li key={index}>
                  {toCapitalizeCase(removeUndercheckSymbol(item[0]))} :{" "}
                  {item[1].slice(0, 10)}
                </li>
              ))}
            </ul>
          ) : (
            "No data"
          )}
        </>
      )}
    </div>
  );
}
