import { FormEvent, useCallback } from "react";
import "./style.css";

import Button from "../Button";
import ThrowErrorButton from "../ErrorButton";
import Input from "../Input";
import { useSearchQuery } from "./customHooks";
import { ThemeContex } from "../../../views/Main/contex";
import { useSearchParams, useRouter } from "next/navigation";

export default function Search() {
  const [searchQuery, setSearchQuery] = useSearchQuery();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      const form = event.currentTarget;
      if (form instanceof HTMLFormElement) {
        const formData = new FormData(form);
        const searchValue = formData.get("search");
        if (searchValue != null) {
          setSearchQuery(searchValue.toString());
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set("search", searchValue.toString());
          router.push(`?${newSearchParams}`);
        }
      }
    },
    [router, searchParams, setSearchQuery],
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
