export type TRequest = {
  request: Request;
};

export type TResponse = {
  searchParams: URLSearchParams;
};

export function searchParamsLoader({ request }: TRequest): TResponse {
  const { searchParams } = new URL(request.url);
  return { searchParams };
}
