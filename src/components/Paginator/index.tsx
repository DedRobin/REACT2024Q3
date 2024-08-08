import { ReactElement, useCallback, useEffect, useState } from "react";

import Link from "next/link";

type PaginatorProps = {
  count: number;
  refetchResult: () => void;
};

export default function Paginator({ count, refetchResult }: PaginatorProps) {
  const searchParams = new URL(location.href).searchParams;
  const [currentPage, setCurrentPage] = useState<string>(
    searchParams.get("page") || "1",
  );
  const [pages, setPages] = useState<number>(1);

  useEffect(() => {
    setPages(Math.ceil(count / 10));
  }, [count]);

  const changePage = (page: string) => {
    setCurrentPage(page);
  };

  const mutatePage = useCallback(
    (
      searchParams: URLSearchParams,
      action: "increase" | "decrease",
      num: number = 1,
    ) => {
      const params = new URLSearchParams(searchParams);
      if (!params.has("page")) params.set("page", "1");
      const page = params.get("page");
      if (page !== null) {
        if (action === "increase") params.set("page", `${+page + num}`);
        else if (action === "decrease") params.set("page", `${+page - num}`);
      }

      return params;
    },
    [],
  );

  const arrowPrevPage = "/?" + mutatePage(searchParams, "decrease").toString();
  const arrowNextPage = "/?" + mutatePage(searchParams, "increase").toString();

  const pagesElements: ReactElement[] = [];

  for (let page = 1; page <= pages; page++) {
    const params = new URLSearchParams(searchParams);
    params.set("page", `${page}`);
    const href = `/?${params.toString()}`;
    pagesElements.push(
      <Link
        href={href}
        key={page}
        className="page"
        style={
          +currentPage === page ? { pointerEvents: "none", opacity: 0.4 } : {}
        }
        onClick={() => changePage(String(page))}
      >
        {page}
      </Link>,
    );
  }

  return (
    <div
      className="paginator"
      onClick={(event) => {
        if (event.target instanceof HTMLAnchorElement) {
          refetchResult();
        }
      }}
    >
      <Link
        href={arrowPrevPage}
        className="arrow arrow-prev"
        style={
          +currentPage === 1 ? { pointerEvents: "none", opacity: 0.4 } : {}
        }
        onClick={() => changePage(String(+currentPage - 1))}
      >
        &#8592;
      </Link>
      {pagesElements}
      <Link
        href={arrowNextPage}
        className="arrow arrow-next"
        style={
          +currentPage === pagesElements.length
            ? { pointerEvents: "none", opacity: 0.4 }
            : {}
        }
        onClick={() => changePage(String(+currentPage + 1))}
      >
        &#8594;
      </Link>
    </div>
  );
}
