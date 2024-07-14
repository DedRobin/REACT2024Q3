import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import "./style.css";

export default function ErrorPage() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div className="error-page">
        <h2 className="error-status">Error {error.status}</h2>
        <p className="error-text"> {error.statusText}</p>
      </div>
    );
  } else {
    return <div>Oops</div>;
  }
}
