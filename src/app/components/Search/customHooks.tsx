"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

type SearchQueryHook = [string, Dispatch<SetStateAction<string>>];

export const useSearchQuery = (): SearchQueryHook => {
  let lastSearchQuery = "";
  if (typeof window !== "undefined") {
    lastSearchQuery =
      localStorage.getItem("dedrobin-REACT2024Q3-search-term") || "";
  }

  const [searchQuery, setSearchQuery] = useState(lastSearchQuery);

  useEffect(() => {
    localStorage.setItem("dedrobin-REACT2024Q3-search-term", searchQuery);
  }, [searchQuery]);

  return [searchQuery, setSearchQuery];
};
