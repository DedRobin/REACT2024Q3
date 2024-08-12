import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";

export enum Path {
  Root = "/",
  Form = "/form",
  ReactHookForm = "/react-hook-form",
}
const router = createBrowserRouter([
  {
    path: Path.Root,
    element: <Main />,
  },
]);

export default router;
