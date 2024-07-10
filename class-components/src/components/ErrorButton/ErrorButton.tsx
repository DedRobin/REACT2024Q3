import { Component, ReactNode } from "react";
import Button from "../Button/Button";
import ComponentWithError from "../ComponentWithError/ComponentWithError";

export default class ThrowErrorButton extends Component<
  object,
  { errorIsRendered: boolean }
> {
  constructor(props: object) {
    super(props);
    this.state = { errorIsRendered: false };
  }

  throwError = () => {
    this.setState({ errorIsRendered: true });
  };

  render(): ReactNode {
    return (
      <>
        <Button
          className="error-button"
          type="button"
          onClick={this.throwError}
        >
          Throw an Error
        </Button>
        {this.state.errorIsRendered ? (
          <ComponentWithError throwError={true} />
        ) : null}
      </>
    );
  }
}
