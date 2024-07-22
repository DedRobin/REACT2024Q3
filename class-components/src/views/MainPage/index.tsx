import { useEffect, useState } from "react";
import Search from "../../components/Search";
import Loader from "../../components/Loader";
import ErrorBoundary from "../../components/ErrorBoundary";
import Paginator from "../../components/Paginator";
import Result from "../../components/Result";
import { useLoaderData, useNavigation } from "react-router-dom";
import { TResponse } from "./services";

export default function MainPage() {
  const { status, count, results } = useLoaderData() as TResponse;
  const navigation = useNavigation();

  const [currentPage, setCurrentPage] = useState<string>("1");
  const [offset, setOffset] = useState<number>(0);
  const [pages, setPages] = useState<number>(1);

  const changePage = (page: string) => {
    setCurrentPage(page);
    setOffset((+page - 1) * 10);
  };

  useEffect(() => {
    if (status === 200) {
      setPages(Math.ceil(count / 10));
    }
  }, [count, results, status]);

  return (
    <>
      <ErrorBoundary>
        <Search />
        {navigation.state === "loading" ? (
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
