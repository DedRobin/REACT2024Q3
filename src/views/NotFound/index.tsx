import { useRouteError } from "react-router-dom";

type TError = {
  statusText: string;
  status: number;
};

function isErrorResponseImpl(error: unknown): error is TError {
  return (
    (error as TError).statusText != null && (error as TError).status != null
  );
}

export default function ErrorPage() {
  const error = useRouteError();

  if (isErrorResponseImpl(error)) {
    return (
      <div id="error-page">
        <h1>Oops! Error {error.status}</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.statusText}</p>
      </div>
    );
  }

  throw new Error("Something went wrong with Error Page");
}
