import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import DefaultForm from "./DefaultForm";
import ReactHookForm from "./ReactHookForm";
import ErrorPage from "./NotFound";

export enum Path {
  Root = "/",
  Form = "/form",
  ReactHookForm = "/react-hook-form",
}
const router = createBrowserRouter([
  {
    path: Path.Root,
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: Path.Form, element: <DefaultForm /> },
      { path: Path.ReactHookForm, element: <ReactHookForm /> },
    ],
  },
]);

export default router;
