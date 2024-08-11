"use client";

import Result from "@/components/Result";
import { Index } from "../../client";
import { PersonPageProps } from "./page";

export type PersonPageProps = {
  personId: string;
};

export default function Person({ personId }: PersonPageProps) {
  if (!personId) throw new Error("You've lost 'personId'");
  if (Array.isArray(personId)) throw new Error("You've got 'Array'");

  return (
    <Index>
      <Result personId={personId} />
    </Index>
  );
}
