import Search from "../../components/Search";
import Loader from "../../components/Loader";
import ErrorBoundary from "../../components/ErrorBoundary";
import Paginator from "../../components/Paginator";
import Result from "../../components/Result";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { useGetCharactersQuery } from "../../store/apiSlice";
import { TResponse } from "./services";

export default function MainPage() {
  const { searchParams } = useLoaderData() as TResponse;

  const { data, isLoading } = useGetCharactersQuery(searchParams.toString());

  return (
    <>
      <ErrorBoundary>
        <Search />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Suspense fallback={<Loader />}>
              <Await
                resolve={data}
                errorElement={<div>Something went wrong!</div>}
              >
                {(data) => {
                  return (
                    <div className="result">
                      <Paginator
                        count={data.count}
                        searchParams={searchParams}
                      ></Paginator>
                      <Result result={data.results} />
                      <Paginator
                        count={data.count}
                        searchParams={searchParams}
                      ></Paginator>
                    </div>
                  );
                }}
              </Await>
            </Suspense>
          </>
        )}
      </ErrorBoundary>
    </>
  );
}
