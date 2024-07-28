export function saveData(csv: string, number: number) {
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", `${number}_swapi_people.csv`);
  a.click();
  URL.revokeObjectURL(url);
}
