import { useState } from "react";
import Button from "../Button";
import ComponentWithError from "../ComponentWithError";
import { ThemeContex } from "../../app/contex";

export default function ThrowErrorButton() {
  const [errorIsRendered, setErrorIsRendered] = useState(false);

  return (
    <ThemeContex.Consumer>
      {(value) => (
        <>
          <Button
            className={
              value === "light" ? "error-button light" : "error-button dark"
            }
            type="button"
            onClick={() => {
              setErrorIsRendered(true);
            }}
          >
            Throw an Error
          </Button>
          {errorIsRendered ? <ComponentWithError throwError={true} /> : null}
        </>
      )}
    </ThemeContex.Consumer>
  );
}
