export type TResult = {
  count: number;
  next: number | null;
  previous: number | null;
  results: TData[] | [];
};

export type TData = { [key: string]: string };

export default class Api {
  baseUrl: string;

  constructor() {
    this.baseUrl = "https://swapi.dev/api/people/";
  }

  async sendRequest(params: {
    search: string;
    page: string;
  }): Promise<[number, TData[] | []]> {
    const urlParams = new URLSearchParams(params);
    const url = new URL(`${this.baseUrl}?${urlParams}`);
    const response = await fetch(url);

    if (response.status === 200) {
      const result: TResult = await response.json();

      if (result) {
        return [response.status, result.results];
      }
    }

    return [response.status, []];
  }
}
