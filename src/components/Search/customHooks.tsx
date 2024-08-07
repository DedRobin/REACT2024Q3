import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SQKEY } from "./constants";

type SearchQueryHook = [string, Dispatch<SetStateAction<string>>];

export const useSearchQuery = (): SearchQueryHook => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery !== "") localStorage.setItem(SQKEY, searchQuery);
    else setSearchQuery(localStorage.getItem(SQKEY) || "");
  }, [searchQuery]);

  return [searchQuery, setSearchQuery];
};
