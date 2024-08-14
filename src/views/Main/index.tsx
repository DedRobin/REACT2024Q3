import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Data from "../../components/Data";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

export default function Main() {
  const state = useSelector((state: RootState) => state);
  const location = useLocation();

  return (
    <>
      <Header />
      <main className="main">
        {location.pathname === "/" ? <Data data={state.data} /> : null}
        <Outlet />
      </main>
    </>
  );
}
