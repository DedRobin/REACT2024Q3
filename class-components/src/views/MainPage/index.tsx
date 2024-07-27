import { useLoaderData } from "react-router-dom";
import Search from "../../components/Search";
import Loader from "../../components/Loader";
import ErrorBoundary from "../../components/ErrorBoundary";
import Paginator from "../../components/Paginator";
import Result from "../../components/Result";
import { useGetCharactersQuery } from "../../store/apiSlice";
import { TResponse } from "./services";
import FlayoutElement from "../../components/FlayoutElement";

export default function MainPage() {
  const { searchParams } = useLoaderData() as TResponse;
  const { data, isFetching } = useGetCharactersQuery(searchParams.toString());

  return (
    <>
      <ErrorBoundary>
        <Search />
        {isFetching ? (
          <Loader />
        ) : (
          <div className="result">
            {data ? (
              <>
                <Paginator
                  count={data.count}
                  searchParams={searchParams}
                ></Paginator>
                <Result results={data.results} />
                <Paginator
                  count={data.count}
                  searchParams={searchParams}
                ></Paginator>
              </>
            ) : (
              <div>No results</div>
            )}
          </div>
        )}
        <FlayoutElement />
      </ErrorBoundary>
    </>
  );
}
