import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type SwapiData = {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthday: string;
  gender: string;
  url: string;
};

export type SwapiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: SwapiData[];
};

export const starWarsApi = createApi({
  reducerPath: "starWarsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({
    getCharacters: builder.query<SwapiResponse, string>({
      query: (searchParams) => {
        if (searchParams) {
          return `people/?${searchParams}`;
        }
        return `people`;
      },
    }),
    getCharacterById: builder.query<SwapiData, string>({
      query: (id) => `people/${id}`,
    }),
  }),
});

export const { useGetCharacterByIdQuery, useGetCharactersQuery } = starWarsApi;
