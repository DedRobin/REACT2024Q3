import { ReactElement } from "react";

import "./style.css";
import { Link } from "react-router-dom";

type PaginatorProps = {
  pages: number;
  current: string;
  searchParams: URLSearchParams;
  onChange: (page: string) => void;
};

export default function Paginator({
  pages,
  current,
  searchParams,
  onChange,
}: PaginatorProps) {
  const arrowPrevPage = `?page=${+current - 1}`;
  const arrowNextPage = `?page=${+current + 1}`;
  if (searchParams.size) {
    arrowPrevPage.concat(`&${searchParams.toString()}`);
    arrowNextPage.concat(`&${searchParams.toString()}`);
  }
  const pagesElements: ReactElement[] = [];
  for (let page = 1; page <= pages; page++) {
    const to = `?page=${page}`;
    if (searchParams.size) to.concat(`&${searchParams.toString()}`);
    pagesElements.push(
      <Link
        to={to}
        key={page}
        className="page"
        style={+current === page ? { pointerEvents: "none", opacity: 0.4 } : {}}
        onClick={() => onChange(String(page))}
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
        style={+current === 1 ? { pointerEvents: "none", opacity: 0.4 } : {}}
        onClick={() => onChange(String(+current - 1))}
      >
        &#8592;
      </Link>
      {pagesElements}
      <Link
        to={arrowNextPage}
        className="arrow arrow-next"
        style={
          +current === pagesElements.length
            ? { pointerEvents: "none", opacity: 0.4 }
            : {}
        }
        onClick={() => onChange(String(+current + 1))}
      >
        &#8594;
      </Link>
    </div>
  );
}
