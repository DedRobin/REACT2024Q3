import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SQKEY } from "./constants";

type SearchQueryHook = [string, Dispatch<SetStateAction<string>>];

export const useSearchQuery = (): SearchQueryHook => {
  // const lastSearchQuery = useRef("");

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log("Effect");
    if (searchQuery !== "") localStorage.setItem(SQKEY, searchQuery);
    else setSearchQuery(localStorage.getItem(SQKEY) || "");
  }, [searchQuery]);

  return [searchQuery, setSearchQuery];
};
