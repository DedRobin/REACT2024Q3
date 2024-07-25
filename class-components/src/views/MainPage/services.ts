import { TData } from "../../store/api";

export type TRequest = {
  request: Request;
};

export type TResponse = {
  count: number;
  results: TData[];
  searchParams: URLSearchParams;
};

export function searchParamsLoader({ request }: TRequest): URLSearchParams {
  const { searchParams } = new URL(request.url);
  return searchParams;
}
