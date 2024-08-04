import { useGetCharactersQuery } from "../../store/apiSlice";
import Search from "../../app/components/Search";
import Loader from "../../app/components/Loader";
import ErrorBoundary from "../../app/components/ErrorBoundary";
import Paginator from "../../app/components/Paginator";
import Result from "../../app/components/Result";
import FlayoutElement from "../../app/components/FlayoutElement";

export default function Main() {
  const searchParams = new URLSearchParams("page=2");
  const { data, isFetching, isLoading } = useGetCharactersQuery(
    searchParams.toString(),
  );

  return (
    <>
      <ErrorBoundary>
        <Search />
        {isLoading || isFetching ? (
          <Loader />
        ) : (
          <div className="result">
            {data ? (
              <>
                <Paginator count={data.count}></Paginator>
                <Result results={data.results} />
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
