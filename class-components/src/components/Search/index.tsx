import { Form, useSubmit } from "react-router-dom";
import { FormEvent, useCallback } from "react";
import "./style.css";

import Button from "../Button";
import ThrowErrorButton from "../ErrorButton";
import Input from "../Input";
import { useSearchQuery } from "../../hooks/customHooks";
import { ThemeContex } from "../../app/contex";

export default function Search() {
  const submit = useSubmit();

  const [searchQuery, setSearchQuery] = useSearchQuery();

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      const form = event.currentTarget;
      if (form instanceof HTMLFormElement) {
        submit(form);
        const formData = new FormData(form);
        const search = formData.get("search");
        if (search) setSearchQuery(search.toString());
      }
    },
    [setSearchQuery, submit],
  );

  return (
    <ThemeContex.Consumer>
      {(value) => (
        <div className={value === "light" ? "search light" : "search dark"}>
          <h1 className="heading">Star Wars (People)</h1>
          <Form className="search-form" onSubmit={handleSubmit}>
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
          </Form>
          <ThrowErrorButton />
        </div>
      )}
    </ThemeContex.Consumer>
  );
}
