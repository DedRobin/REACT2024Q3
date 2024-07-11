import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Loader from "../components/Loader";
import ErrorBoundary from "../components/ErrorBoundary";
import { api, TData } from "../store/api";
import Result from "../components/Result";

import "./style.css";
import { useSearchQuery } from "../hooks/customHooks";

export default function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<TData[] | []>([]);
  const [searchQuery, setSearchQuery] = useSearchQuery();

  useEffect(() => initialRequest(searchQuery), []);

  const initialRequest = (searchQuery: string) => {
    setLoading(true);
    sendRequest(searchQuery);
  };

  const sendRequest = async (value: string | null) => {
    const [status, result] = await api.request({
      search: value ?? "",
      page: "1",
    });

    if (status === 200) {
      setLoading(false);
      setResult(result);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { currentTarget } = event;
    if (currentTarget instanceof HTMLFormElement) {
      const inputData = currentTarget[0];
      if (inputData instanceof HTMLInputElement) {
        const { value } = inputData;

        setSearchQuery(value);
        setLoading(true);
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
