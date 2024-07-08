import { Component, ErrorInfo, ReactNode } from "react";

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

  render() {
    if (this.state.hasError) {
      return <h2>{this.state.errorMessage}</h2>;
    }

    return this.props.children;
  }
}
