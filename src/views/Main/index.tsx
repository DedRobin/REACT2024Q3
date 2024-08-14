import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import Header from "../../components/Header";
import Data from "../../components/Data";
import { useState } from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { ContextType } from "./types";

export default function Main() {
  const state = useSelector((state: RootState) => state);
  const [data, setData] = useState(state.data);
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
