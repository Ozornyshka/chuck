import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const chuckApi = createApi({
  reducerPath: "chuckApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.chucknorris.io/jokes/" }),
  endpoints: (builder) => ({
    getRandomJoke:
      builder.query <
      {
        query: () => `random`,
      },
  }),
});

export const { useGetRandomJokeQuery } = chuckApi;
