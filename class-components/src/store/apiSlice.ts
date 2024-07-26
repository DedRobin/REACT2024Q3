import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type SWPerson = { [key: string]: string };

export const starWarsApi = createApi({
  reducerPath: "starWarsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({
    getCharacters: builder.query<SWPerson, string>({
      query: (searchParams) => {
        if (searchParams) {
          return `people/?${searchParams}`;
        }
        return `people/`;
      },
    }),
    getCharacterById: builder.query<SWPerson, string>({
      query: (id) => `people/${id}`,
    }),
  }),
});

export const { useGetCharacterByIdQuery, useGetCharactersQuery } = starWarsApi;
