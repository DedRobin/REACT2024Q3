import Button from "../Button";
import ThrowErrorButton from "../ErrorButton";
import Input from "../Input";

import "./style.css";

type SearchProps = {
  searchQuery: string;
  callback: Handler;
};
type Handler = (event: React.FormEvent<Element>) => Promise<void>;

export default function Search({ callback, searchQuery }: SearchProps) {
  return (
    <div className="search">
      <h1 className="heading">Star Wars (People)</h1>
      <form className="search-form" onSubmit={callback}>
        <Input
          placeholder="Enter text..."
          className="search-input"
          name="search-input"
          defaultValue={searchQuery}
        />
        <Button className="search-button" type="submit">
          Search
        </Button>
      </form>
      <ThrowErrorButton />
    </div>
  );
}