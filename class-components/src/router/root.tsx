import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../views/ErrorPage";
import MainPage from "../views/MainPage";
import { resultLoader } from "../views/MainPage/services";

export const router = createBrowserRouter([
  {
    path: window.location.pathname,
    element: <MainPage />,
    errorElement: <ErrorPage />,
    loader: resultLoader,
  },
]);
