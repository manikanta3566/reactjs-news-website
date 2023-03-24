import React from "react";
import { useGlobalContext } from "./Context";

const Pagination = () => {
  const { pageNo, totalPages, getPrevPage, getNextPage } = useGlobalContext();
  return (
    <div className="pagination-btn">
      <button
        className="btn"
        onClick={() => {
          getPrevPage();
        }}
      >
        PREV
      </button>
      <p>
        {pageNo + 1} of {totalPages}
      </p>
      <button
        className="btn"
        onClick={() => {
          getNextPage();
        }}
      >
        NEXT
      </button>
    </div>
  );
};

export default Pagination;
