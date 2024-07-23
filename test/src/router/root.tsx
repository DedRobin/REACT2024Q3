import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import Results from "./results";

export const loader = () => {
  const response = fetch("https://swapi.dev/api/people").then((response) =>
    response.json()
  );
  console.log(new Date().getSeconds(), "Get data");
  return defer({ results: response });
};

export default function Root() {
  const { results } = useLoaderData() as {
    results: { results: { name: string }[] };
  };
  console.log(new Date().getSeconds(), "render");

  return (
    <div>
      <h1>Hello</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={results}>
          {(results: { results: { name: string }[] }) => (
            <Results results={results} />
          )}
        </Await>
      </Suspense>
    </div>
  );
}
