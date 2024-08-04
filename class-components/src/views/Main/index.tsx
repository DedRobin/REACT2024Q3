import Search from "../../components/Search";
import Loader from "../../components/Loader";
import Paginator from "../../components/Paginator";
import Result from "../../components/Result";
import { useGetCharactersQuery } from "../../store/apiSlice";
import ErrorBoundary from "../../components/ErrorBoundary";
import FlayoutElement from "../../components/FlayoutElement";

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
