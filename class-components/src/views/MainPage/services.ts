import { defer } from "react-router-dom";
import { api, TData } from "../../store/api";

export type TRequest = {
  request: Request;
};

export type TResponse = {
  count: number;
  results: TData[];
  searchParams: URLSearchParams;
};

export function resultLoader({ request }: TRequest) {
  const url = new URL(request.url);
  const { searchParams } = url;
  const page = searchParams.get("page") || undefined;
  const search = searchParams.get("search") || undefined;

  console.log("page =", page);
  console.log("search =", search);

  localStorage.setItem("dedrobin-REACT2024Q3-search-term", search || "");

  const data = api.request({
    search,
    page,
  });

  return defer({ data, searchParams });
}
