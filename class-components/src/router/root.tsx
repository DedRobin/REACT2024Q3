import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import ErrorPage from "../views/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);
