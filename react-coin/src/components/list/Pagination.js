import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({page, totalPages, handlePaginationClick}) => {
  return (
    <div className='Pagination'>
      <button
        className='Pagination-button'
        onClick={() => handlePaginationClick('prev')}
        disabled={page <= 1}
      >
          &larr;
      </button>
      <span className='Pagination-info'> page <strong>{page}</strong> of {totalPages}</span>
      <button
        className='Pagination-button'
        onClick={() => handlePaginationClick('next')}
        disabled={page >= totalPages}
      >
        &rarr;
      </button>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handlePaginationClick: PropTypes.func.isRequired
};

export default Pagination;
