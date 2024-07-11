import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Loader from "../components/Loader";
import ErrorBoundary from "../components/ErrorBoundary";
import { api, TData } from "../store/api";
import Result from "../components/Result";

import "./style.css";

export default function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<TData[] | []>([]);
  useEffect(() => initialRequest(), []);

  const initialRequest = () => {
    console.log("RENDER");
    const value = localStorage.getItem("dedrobin-REACT2024Q3-search-term");
    setLoading(true);
    if (value) sendRequest(value);
    else sendRequest();
  };

  const sendRequest = async (value: string = "") => {
    const [status, result] = await api.request({
      search: value,
      page: "1",
    });

    if (status === 200) {
      setLoading(false);
      setResult(result);
    }
  };

  const storeResult = (value: string) => {
    localStorage.setItem("dedrobin-REACT2024Q3-search-term", value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { currentTarget } = event;
    if (currentTarget instanceof HTMLFormElement) {
      const inputData = currentTarget[0];
      if (inputData instanceof HTMLInputElement) {
        const { value } = inputData;

        setLoading(true);
        storeResult(value);
        await sendRequest(value);
      }
    }
  };

  return (
    <>
      <ErrorBoundary>
        <Search callback={(event: React.FormEvent) => handleSubmit(event)} />
        {loading ? <Loader /> : <Result result={result} />}
      </ErrorBoundary>
    </>
  );
}
