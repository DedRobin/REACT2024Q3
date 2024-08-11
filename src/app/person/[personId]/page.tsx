import Person from "./client";
import { headers } from "next/headers";
import { extractPersonId } from "./services";

export default function PersonPage() {
  const headerList = headers();
  const personId = extractPersonId(headerList);

  return <Person personId={personId} />;
}
