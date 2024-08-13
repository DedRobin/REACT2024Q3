import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Data from "../../components/Data";

export default function Main() {
  const location = useLocation();
  return (
    <>
      <Header />
      <main className="main">
        {location.pathname === "/" ? <Data /> : null}
        <Outlet />
      </main>
    </>
  );
}
