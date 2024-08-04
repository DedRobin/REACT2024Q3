import dynamic from "next/dynamic";

import { useGetCharactersQuery } from "../../store/apiSlice";
import Loader from "../../app/components/Loader";
import ErrorBoundary from "../../app/components/ErrorBoundary";
import Paginator from "../../app/components/Paginator";
import Results from "../../app/components/Results";
import FlayoutElement from "../../app/components/FlayoutElement";
import { useSearchParams } from "next/navigation";

const Search = dynamic(() => import("../../app/components/Search"), {
  ssr: false,
});

export default function MainPage() {
  const searchParams = useSearchParams();
  const { data, isFetching, isLoading, refetch } = useGetCharactersQuery(
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
                <Paginator
                  count={data.count}
                  refetchResult={refetch}
                ></Paginator>
                <Results results={data.results} />
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
