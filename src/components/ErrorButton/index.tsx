import { useState } from "react";
import Button from "../Button";
import { ThemeContex } from "../../views/Main/contex";

export default function ThrowErrorButton() {
  const [isError, setIsError] = useState(false);

  if (isError)
    throw new Error(
      "Hi. I'm 'ThrowErrorButton' component. This error was issued by me.",
    );
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
              setIsError(true);
            }}
          >
            Throw an Error
          </Button>
        </>
      )}
    </ThemeContex.Consumer>
  );
}
