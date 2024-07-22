import { Form, useSubmit } from "react-router-dom";
import { FormEvent, useCallback } from "react";
import "./style.css";

import Button from "../Button";
import ThrowErrorButton from "../ErrorButton";
import Input from "../Input";
import { useSearchQuery } from "../../hooks/customHooks";

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
    <div className="search">
      <h1 className="heading">Star Wars (People)</h1>
      <Form className="search-form" onSubmit={handleSubmit}>
        <Input
          placeholder="Enter text..."
          className="search-input"
          name="search"
          defaultValue={searchQuery}
        />
        <Button className="search-button" type="submit">
          Search
        </Button>
      </Form>
      <ThrowErrorButton />
    </div>
  );
}
