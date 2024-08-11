import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

type PersonIdExtractor = (headerList: ReadonlyHeaders) => string;

const extractPersonId: PersonIdExtractor = (headerList) => {
  const pathname = headerList.get("x-current-path");
  if (!pathname) throw new Error("You've lost 'pathname'");
  const personId = pathname.split("/").at(-1);
  if (!personId) throw new Error("There is no 'personId'");

  return personId;
};

export { extractPersonId };
