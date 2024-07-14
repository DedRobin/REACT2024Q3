import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../views/ErrorPage";
import MainPage from "../views/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
]);
