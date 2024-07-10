export type SearchProps = {
  callback: Handler;
};

type Handler = (event: React.FormEvent<Element>) => Promise<void>;
