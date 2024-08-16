import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      {isRouteErrorResponse(error) ? (
        <>
          <h1>Oops! Error {error.status}</h1>
          <p>{error.statusText}</p>
        </>
      ) : (
        <>
          <h1>Sorry, an unexpected error has occurred.</h1>
        </>
      )}
    </div>
  );
}
