import { ReactElement } from "react";

import "./style.css";

type PaginatorProps = {
  pages: number;
  current: string;
  onChange: (page: string) => void;
};

export default function Paginator({
  pages,
  current,
  onChange,
}: PaginatorProps) {
  const pagesElements: ReactElement[] = [];
  for (let page = 1; page <= pages; page++) {
    pagesElements.push(
      <div
        key={page}
        className="page"
        style={+current === page ? { pointerEvents: "none", opacity: 0.4 } : {}}
        onClick={() => onChange(String(page))}
      >
        {page}
      </div>,
    );
  }

  return (
    <div className="paginator">
      <a
        className="arrow arrow-prev"
        style={+current === 1 ? { pointerEvents: "none", opacity: 0.4 } : {}}
      >
        &#8592;
      </a>
      {pagesElements}
      <a
        className="arrow arrow-next"
        style={
          +current === pagesElements.length
            ? { pointerEvents: "none", opacity: 0.4 }
            : {}
        }
      >
        &#8594;
      </a>
    </div>
  );
}
