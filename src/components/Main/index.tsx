// import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

import { useGetCharactersQuery } from "@/store/apiSlice";
import ErrorBoundary from "../ErrorBoundary";
import Loader from "../Loader";
import Paginator from "../Paginator";
import Results from "../Results";
import FlayoutElement from "../FlayoutElement";
import Search from "../Search";

// const Search = dynamic(() => import("../Search"), {
//   ssr: false,
// });

export default function MainPage() {
  const searchParams = useSearchParams();
  const { data, isFetching, isLoading, refetch } = useGetCharactersQuery(
    searchParams.toString(),
  );

  return (
    <ErrorBoundary>
      <Search />
      {isLoading || isFetching ? (
        <Loader />
      ) : (
        <div className="result">
          {data ? (
            <>
              <Paginator count={data.count} refetchResult={refetch} />
              <Results results={data.results} />
            </>
          ) : (
            <div>No results</div>
          )}
        </div>
      )}
      <FlayoutElement />
    </ErrorBoundary>
  );
}
