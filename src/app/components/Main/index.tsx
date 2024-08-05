import dynamic from "next/dynamic";
import "./style.css";

import { useSearchParams } from "next/navigation";
import { useGetCharactersQuery } from "@/store/apiSlice";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import FlayoutElement from "@/app/components/FlayoutElement";
import Paginator from "@/app/components/Paginator";
import Results from "@/app/components/Results";
import Loader from "@/app/components/Loader";

const Search = dynamic(() => import("../Search"), {
  ssr: false,
});

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
