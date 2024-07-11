import Button from "../Button";
import ThrowErrorButton from "../ErrorButton";
import Input from "../Input";

import "./style.css";

type SearchProps = {
  callback: Handler;
};
type Handler = (event: React.FormEvent<Element>) => Promise<void>;

export default function Search({ callback }: SearchProps) {
  const value = localStorage.getItem("dedrobin-REACT2024Q3-search-term") ?? "";

  return (
    <div className="search">
      <h1 className="heading">Star Wars (People)</h1>
      <form className="search-form" onSubmit={callback}>
        <Input
          placeholder="Enter text..."
          className="search-input"
          name="search-input"
          defaultValue={value}
        />
        <Button className="search-button" type="submit">
          Search
        </Button>
      </form>
      <ThrowErrorButton />
    </div>
  );
}
