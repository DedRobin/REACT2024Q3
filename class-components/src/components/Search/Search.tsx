import Button from "../Button/Button";
import Input from "../Input/Input";

import "./Search.css";
import { SearchProps } from "./types";

export default function Search({ callback }: SearchProps) {
  return (
    <form className="search-form" onSubmit={callback}>
      <Input placeholder="Enter" />
      <Button type="submit">Search</Button>
    </form>
  );
}
