import { ReactElement, useEffect, useState } from "react";

import "./style.css";
import { Link } from "react-router-dom";

type PaginatorProps = {
  count: number;
  searchParams?: URLSearchParams;
};

export default function Paginator({ count, searchParams }: PaginatorProps) {
  const [currentPage, setCurrentPage] = useState<string>(
    searchParams?.get("page") || "1",
  );
  const [pages, setPages] = useState<number>(1);

  useEffect(() => {
    setPages(Math.ceil(count / 10));
  }, [count]);

  const changePage = (page: string) => {
    setCurrentPage(page);
  };

  let arrowPrevPage = `?page=${+currentPage - 1}`;
  let arrowNextPage = `?page=${+currentPage + 1}`;

  if (searchParams && searchParams.size) {
    arrowPrevPage = arrowPrevPage.concat(`&${searchParams.toString()}`);
    arrowNextPage = arrowNextPage.concat(`&${searchParams.toString()}`);
  }

  const pagesElements: ReactElement[] = [];

  for (let page = 1; page <= pages; page++) {
    let to = `?page=${page}`;
    if (searchParams && searchParams.size)
      to = to.concat(`&${searchParams.toString()}`);
    pagesElements.push(
      <Link
        to={to}
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
    <div className="paginator">
      <Link
        to={arrowPrevPage}
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
        to={arrowNextPage}
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
