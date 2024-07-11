export type TResult = {
  count: number;
  next: number | null;
  previous: number | null;
  results: TData[] | [];
};

export type TData = { [key: string]: string };

class Api {
  baseUrl: string;

  constructor() {
    this.baseUrl = "https://swapi.dev/api/people/";
  }

  async sendRequest(params: {
    page: string;
    search?: string;
  }): Promise<[number, TData[] | []]> {
    const filterPapams = Object.fromEntries(
      Object.entries(params).filter((item) => !!item[1]),
    );
    const urlParams = new URLSearchParams(filterPapams);
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

export const api = new Api();
