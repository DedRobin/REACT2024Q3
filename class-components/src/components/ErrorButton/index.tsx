import { useState } from "react";
import Button from "../Button";
import ComponentWithError from "../ComponentWithError";

export default function ThrowErrorButton() {
  const [errorIsRendered, setErrorIsRendered] = useState(false);

  return (
    <>
      <Button
        className="error-button"
        type="button"
        onClick={() => {
          setErrorIsRendered(true);
        }}
      >
        Throw an Error
      </Button>
      {errorIsRendered ? <ComponentWithError throwError={true} /> : null}
    </>
  );
}
