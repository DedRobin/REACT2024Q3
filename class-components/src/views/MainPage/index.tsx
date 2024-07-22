import Search from "../../components/Search";
import Loader from "../../components/Loader";
import ErrorBoundary from "../../components/ErrorBoundary";
import Paginator from "../../components/Paginator";
import Result from "../../components/Result";
import { useLoaderData, useNavigation } from "react-router-dom";
import { TResponse } from "./services";

export default function MainPage() {
  const { count, results, searchParams } = useLoaderData() as TResponse;
  const navigation = useNavigation();
  return (
    <>
      <ErrorBoundary>
        <Search />

        {navigation.state === "loading" ? (
          <Loader />
        ) : (
          <>
            <Paginator count={count} searchParams={searchParams}></Paginator>
            <Result result={results} />
            <Paginator count={count} searchParams={searchParams}></Paginator>
          </>
        )}
      </ErrorBoundary>
    </>
  );
}
