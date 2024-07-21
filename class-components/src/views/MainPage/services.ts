import { api, TData } from "../../store/api";

export type TResponse = {
  status: number;
  count: number;
  results: TData[];
};

export async function resultLoader({
  request,
}: {
  request: Request;
}): Promise<TResponse> {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || undefined;
  const search = url.searchParams.get("search") || undefined;

  console.log(page);

  const response = await api.request({
    search,
    page,
  });

  const [status, data] = response;
  const { count, results } = data;

  return { status, count, results };
}
