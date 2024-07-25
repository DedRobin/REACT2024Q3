import Search from "../../components/Search";
import Loader from "../../components/Loader";
import ErrorBoundary from "../../components/ErrorBoundary";
import Paginator from "../../components/Paginator";
import Result from "../../components/Result";
import { Await, useLoaderData, useNavigation } from "react-router-dom";
import { TResponse } from "./services";
import { Suspense } from "react";

export default function MainPage() {
  const { data, searchParams } = useLoaderData() as {
    data: Promise<Omit<TResponse, "searchParamns">>;
    searchParams: URLSearchParams;
  };
  const navigation = useNavigation();
  return (
    <>
      <ErrorBoundary>
        <Search />
        {navigation.state === "loading" ? (
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
