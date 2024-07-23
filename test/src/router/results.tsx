export default function Results({
  results,
}: {
  results: { results: { name: string }[] };
}) {
  return (
    <ul>
      {results.results.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
}
