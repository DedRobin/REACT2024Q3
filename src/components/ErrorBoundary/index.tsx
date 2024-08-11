import { Component, ErrorInfo, ReactNode } from "react";

import Button from "../Button";
import { ThemeContex } from "../Main/contex";

interface ErrorProps {
  children: ReactNode;
}

interface ErrorState {
  hasError: boolean;
  errorMessage: string;
}

export default class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: "Error was caught by ErrorBoundary",
    };
    this.reset = this.reset.bind(this);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorMessage: error.message,
    });
    console.error(error, errorInfo);
  }

  reset() {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ThemeContex.Consumer>
          {(value) => (
            <div className="error">
              <div className="error-text">{this.state.errorMessage}</div>
              <Button
                className={
                  value === "light" ? "back-button light" : "back-button dark"
                }
                type="button"
                onClick={this.reset}
              >
                Go back
              </Button>
            </div>
          )}
        </ThemeContex.Consumer>
      );
    }

    return this.props.children;
  }
}
