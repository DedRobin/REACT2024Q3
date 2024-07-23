export type TResponseData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TData[] | [];
};

export type TData = { [key: string]: string };

type TParams = {
  page?: string;
  search?: string;
};

class Api {
  baseUrl: string;

  constructor() {
    this.baseUrl = "https://swapi.dev/api/people/";
  }

  async request(params: TParams): Promise<TResponseData> {
    const filteredPapams = this.filterParams(params);
    const urlParams = new URLSearchParams(filteredPapams);
    const url = new URL(`${this.baseUrl}?${urlParams}`);
    const data: TResponseData = await (await fetch(url)).json();

    return data;
  }

  filterParams(params: TParams) {
    const filteredPapams = Object.fromEntries(
      Object.entries(params).filter((item) => !!item[1]),
    );
    return filteredPapams;
  }
}

export const api = new Api();
