import React, { Component } from "react";
import Search from "./components/Search/Search";
import Loader from "./components/Loader/Loader";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ThrowErrorButton from "./components/ErrorButton/ErrorButton";
import Api, { TData } from "./store/api";

import "./App.css";
import Result from "./components/Result/Result";

type AppState = {
  loading: boolean;
  result: TData[] | [];
};

class App extends Component<object, AppState> {
  api: Api;

  constructor(props: object) {
    super(props);
    this.state = {
      loading: false, // loader disappears
      result: [],
    };
    this.api = new Api();
  }

  componentDidMount() {
    this.setState({ loading: true }); // loader appears
    this.sendRequest();
  }

  async sendRequest(value: string = "") {
    const [status, result] = await this.api.sendRequest({ search: value });

    if (status === 200) {
      this.setState({
        loading: false,
        result,
      });

      this.storeResult(result);
    }
  }

  storeResult(result: TData[]) {
    localStorage.setItem("dedrobin-REACT2024Q3-result", JSON.stringify(result));
  }

  async handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const { currentTarget } = event;
    if (currentTarget instanceof HTMLFormElement) {
      const inputData = currentTarget[0];
      if (inputData instanceof HTMLInputElement) {
        const { value } = inputData;

        this.setState({ loading: true }); // loader appears

        await this.sendRequest(value);
      }
    }
  }

  render() {
    return (
      <>
        <ErrorBoundary>
          <h1 className="heading">Star Wars (People)</h1>
          <Search
            callback={(event: React.FormEvent) => this.handleSubmit(event)}
          />
          <ThrowErrorButton />
          {this.state.loading ? (
            <Loader />
          ) : (
            <Result result={this.state.result} />
          )}
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
