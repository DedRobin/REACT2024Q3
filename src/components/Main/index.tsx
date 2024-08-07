import { useSearchParams } from "next/navigation";

import { useGetCharactersQuery } from "@/store/apiSlice";
import Loader from "../Loader";
import Paginator from "../Paginator";
import Results from "../Results";
import FlayoutElement from "../FlayoutElement";
import Search from "../Search";

export default function MainPage() {
  const searchParams = useSearchParams();
  const { data, isFetching, isLoading, refetch } = useGetCharactersQuery(
    searchParams.toString(),
  );

  return (
    <>
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
    </>
  );
}
