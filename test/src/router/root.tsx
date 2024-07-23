import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();
  return { results: data.results };
};

export default function Root() {
  const { results } = useLoaderData() as { results: [{ name: string }] };

  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
