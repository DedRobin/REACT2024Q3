import { createHashRouter } from "react-router-dom";
import ErrorPage from "../views/ErrorPage";
import MainPage from "../views/MainPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
]);
