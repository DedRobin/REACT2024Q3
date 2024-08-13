import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import Header from "../../components/Header";
import Data from "../../components/Data";
import React, { useState } from "react";
import { TFormData } from "../../components/Data/types";

export const defaultData: TFormData = {
  name: "null",
  age: "null",
  email: "null",
  password: "null",
  gender: "null",
  avatar: "null",
  country: "null",
};

type ContextType = {
  setData: React.Dispatch<React.SetStateAction<typeof defaultData>>;
};

export default function Main() {
  const [data, setData] = useState(defaultData);
  const location = useLocation();
  return (
    <>
      <Header />
      <main className="main">
        {location.pathname === "/" ? <Data data={data} /> : null}
        <Outlet context={{ setData } satisfies ContextType} />
      </main>
    </>
  );
}

export function useCustomData() {
  return useOutletContext<ContextType>();
}
