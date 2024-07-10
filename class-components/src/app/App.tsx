import React, { Component } from "react";
import Search from "../components/Search/Search";
import Loader from "../components/Loader/Loader";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Api, { TData } from "../store/api";

import "./App.css";
import Result from "../components/Result/Result";

type AppState = {
  loading: boolean;
  result: TData[] | [];
};

class App extends Component<object, AppState> {
  api: Api;

  constructor(props: object) {
    super(props);
    this.state = {
      loading: false,
      result: [],
    };
    this.api = new Api();
  }

  componentDidMount() {
    const value = localStorage.getItem("dedrobin-REACT2024Q3-search-term");
    this.setState({ loading: true });
    if (value) this.sendRequest(value);
    else this.sendRequest();
  }

  async sendRequest(value: string = "") {
    const [status, result] = await this.api.sendRequest({
      search: value,
      page: "1",
    });

    if (status === 200) {
      this.setState({
        loading: false,
        result,
      });
    }
  }

  storeResult(value: string) {
    localStorage.setItem("dedrobin-REACT2024Q3-search-term", value);
  }

  async handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const { currentTarget } = event;
    if (currentTarget instanceof HTMLFormElement) {
      const inputData = currentTarget[0];
      if (inputData instanceof HTMLInputElement) {
        const { value } = inputData;

        this.setState({ loading: true });
        this.storeResult(value);
        await this.sendRequest(value);
      }
    }
  }

  render() {
    return (
      <>
        <ErrorBoundary>
          <Search
            callback={(event: React.FormEvent) => this.handleSubmit(event)}
          />
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
