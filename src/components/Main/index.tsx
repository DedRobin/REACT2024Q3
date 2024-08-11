import { ReactElement } from "react";
import FlayoutElement from "../FlayoutElement";
import { useSearchParams } from "next/navigation";

import { useGetCharactersQuery } from "@/store/apiSlice";
import Loader from "../Loader";
import Paginator from "../Paginator";
import Results from "../Results";
import Search from "../Search";

type MainPageProps = {
  children?: ReactElement | ReactElement[];
};

export default function MainPage({ children }: MainPageProps) {
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
              <Results results={data.results}>{children}</Results>
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
