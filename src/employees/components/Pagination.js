import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.scss';


const Pagination = (props) => {
  const handleNextPage = () => {
    props.nextPage();
  };

  const handlePrevPage = () => {
    props.prevPage();
  };

  const { disabledPrev, disabledNext } = props;

  return (

    <div className="pagination">
      <button
        className={`btn green ${disabledPrev}`}
        onClick={handlePrevPage}
        type="button"
      >
        Prev
      </button>
      <button
        className={`btn green ${disabledNext}`}
        onClick={handleNextPage}
        type="button"
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  nextPage: PropTypes.func,
  prevPage: PropTypes.func,
  disabledPrev: PropTypes.string,
  disabledNext: PropTypes.string
};

export default Pagination;
