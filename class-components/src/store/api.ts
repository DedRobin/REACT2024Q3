export type TResponseData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TData[] | [];
};

export type TData = { [key: string]: string };

class Api {
  baseUrl: string;

  constructor() {
    this.baseUrl = "https://swapi.dev/api/people/";
  }

  async request(params: {
    page?: string;
    search?: string;
  }): Promise<[number, TResponseData]> {
    const filterPapams = Object.fromEntries(
      Object.entries(params).filter((item) => !!item[1]),
    );
    const urlParams = new URLSearchParams(filterPapams);
    const url = new URL(`${this.baseUrl}?${urlParams}`);
    const response = await fetch(url);
    const data: TResponseData = await response.json();

    return [response.status, data];
  }
}

export const api = new Api();
