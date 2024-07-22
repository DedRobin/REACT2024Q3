import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import MainPage from "./MainPage";
import { resultLoader } from "./MainPage/services";

export const router = createBrowserRouter([
  {
    path: window.location.pathname,
    element: <MainPage />,
    errorElement: <ErrorPage />,
    loader: resultLoader,
  },
]);
