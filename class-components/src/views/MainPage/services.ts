import { api, TData } from "../../store/api";

export type TRequest = {
  request: Request;
};

export type TResponse = {
  status: number;
  count: number;
  results: TData[];
  searchParams: URLSearchParams;
};

export async function resultLoader({ request }: TRequest): Promise<TResponse> {
  const url = new URL(request.url);
  const { searchParams } = url;
  const page = searchParams.get("page") || undefined;
  const search = searchParams.get("search") || undefined;

  console.log("page =", page);
  console.log("search =", search);

  if (search) localStorage.setItem("dedrobin-REACT2024Q3-search-term", search);

  const response = await api.request({
    search,
    page,
  });

  const [status, data] = response;
  const { count, results } = data;

  return { status, count, results, searchParams };
}
