import React, { useCallback, useEffect, useState } from "react";
import Search from "../../components/Search";
import Loader from "../../components/Loader";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useSearchQuery } from "../../hooks/customHooks";
import Paginator from "../../components/Paginator";
import Result from "../../components/Result";
import { useLoaderData, useSubmit } from "react-router-dom";
import { TResponse } from "./services";
import { SubmitTarget } from "react-router-dom/dist/dom";

export default function MainPage() {
  const { status, count, results } = useLoaderData() as TResponse;
  const [loading, setLoading] = useState<boolean>(true);
  // const [result, setResult] = useState<TData[] | []>([]);
  const [currentPage, setCurrentPage] = useState<string>("1");
  const [offset, setOffset] = useState<number>(0);
  const [pages, setPages] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useSearchQuery();

  ///
  const submit = useSubmit();

  const changePage = (page: string) => {
    setCurrentPage(page);
    setOffset((+page - 1) * 10);
  };

  // const sendRequest = useCallback(
  //   async (value: string | null) => {
  //     const response = await api.request({
  //       search: value ?? "",
  //       page: currentPage,
  //     });

  //     const [status, data] = response;
  //     const { count, results } = data;
  //     if (status === 200) {
  //       setLoading(false);
  //       setResult(results);
  //       setPages(Math.ceil(count / 10));
  //     }
  //   },
  //   [currentPage],
  // );

  useEffect(() => {
    if (status === 200) {
      setLoading(false);
      // setResult(results);
      setPages(Math.ceil(count / 10));
    }
  }, [count, results, status]);

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
          // await sendRequest(value);
        }
      }
    },
    [setSearchQuery],
  );

  return (
    <>
      <ErrorBoundary>
        <Search
          searchQuery={searchQuery}
          // callback={(event: React.FormEvent) => handleSubmit(event)}
          callback={(event: Event) => {
            if (event.currentTarget instanceof HTMLInputElement) {
              submit(event.currentTarget.form);
            }
          }}
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
            <Result result={results} offset={offset} />
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
