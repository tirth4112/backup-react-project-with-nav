// Pagination.js
import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, handlePageClick }) => (
  <ReactPaginate
    previousLabel={'Previous'}
    nextLabel={'Next'}
    breakLabel={'...'}
    pageCount={pageCount}
    onPageChange={handlePageClick}
    containerClassName={'pagination'}
    activeClassName={'active'}
    pageClassName={'page-item'}
    previousClassName={'page-item'}
    nextClassName={'page-item'}
    pageLinkClassName={'page-link'}
    previousLinkClassName={'page-link'}
    nextLinkClassName={'page-link'}
  />
);

export default Pagination;
