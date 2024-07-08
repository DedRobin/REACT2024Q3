import Button from "../Button/Button";
import Input from "../Input/Input";

import "./Search.css";
import { SearchProps } from "./types";

export default function Search({ callback }: SearchProps) {
  const value = localStorage.getItem("dedrobin-REACT2024Q3-search-term") ?? "";

  return (
    <form className="search-form" onSubmit={callback}>
      <Input placeholder="Enter" defaultValue={value} />
      <Button type="submit">Search</Button>
    </form>
  );
}
