import React, { useCallback, useEffect, useState } from "react";
import Search from "../../components/Search";
import Loader from "../../components/Loader";
import ErrorBoundary from "../../components/ErrorBoundary";
import { api, TData } from "../../store/api";
import { useSearchQuery } from "../../hooks/customHooks";
import Paginator from "../../components/Paginator";
import Result from "../../components/Result";

export default function MainPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<TData[] | []>([]);
  const [currentPage, setCurrentPage] = useState<string>("1");
  const [offset, setOffset] = useState<number>(0);
  const [pages, setPages] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useSearchQuery();

  const changePage = (page: string) => {
    setCurrentPage(page);
    setOffset((+page - 1) * 10);
  };

  const sendRequest = useCallback(
    async (value: string | null) => {
      const response = await api.request({
        search: value ?? "",
        page: currentPage,
      });

      const [status, data] = response;
      const { count, results } = data;
      if (status === 200) {
        setLoading(false);
        setResult(results);
        setPages(Math.ceil(count / 10));
      }
    },
    [currentPage],
  );

  useEffect(() => {
    setLoading(true);
    sendRequest(searchQuery);
  }, [searchQuery, sendRequest]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
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
    },
    [sendRequest, setSearchQuery],
  );

  return (
    <>
      <ErrorBoundary>
        <Search
          searchQuery={searchQuery}
          callback={(event: React.FormEvent) => handleSubmit(event)}
        />
        {loading ? (
          <Loader />
        ) : (
          <>
            <Paginator
              pages={pages}
              current={currentPage}
              onChange={changePage}
            ></Paginator>
            <Result result={result} offset={offset} />
            <Paginator
              pages={pages}
              current={currentPage}
              onChange={changePage}
            ></Paginator>
          </>
        )}
      </ErrorBoundary>
    </>
  );
}
