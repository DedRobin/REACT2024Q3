import { FormEvent, useCallback } from "react";
import "./style.css";

import Button from "../Button";
import ThrowErrorButton from "../ErrorButton";
import Input from "../Input";
import { useSearchQuery } from "./customHooks";
import { ThemeContex } from "../../../views/Main/contex";

export default function Search() {
  const [searchQuery, setSearchQuery] = useSearchQuery();

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      const form = event.currentTarget;
      if (form instanceof HTMLFormElement) {
        const formData = new FormData(form);
        const search = formData.get("search");
        if (search) {
          setSearchQuery(search.toString());
        }
      }
    },
    [setSearchQuery],
  );

  return (
    <ThemeContex.Consumer>
      {(value) => (
        <div className={value === "light" ? "search light" : "search dark"}>
          <h1 className="heading">Star Wars (People)</h1>
          <form className="search-form" method="get" onSubmit={handleSubmit}>
            <Input
              placeholder="Enter text..."
              className={
                value === "light" ? "search-input light" : "search-input dark"
              }
              name="search"
              defaultValue={searchQuery}
            />
            <Button
              className={
                value === "light" ? "search-button light" : "search-button dark"
              }
              type="submit"
            >
              Search
            </Button>
          </form>
          <ThrowErrorButton />
        </div>
      )}
    </ThemeContex.Consumer>
  );
}
