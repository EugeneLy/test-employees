import React from 'react';
import PropTypes from 'prop-types';


const Filter = (props) => {
  const handleEmployeesSort = () => {
    props.employeesSort();
  };

  const { caption } = props;

  return (
    <div className="filter">
      <button
        className="btn blue"
        onClick={handleEmployeesSort}
        type="button"
      >
        {caption}
      </button>
    </div>
  );
};

Filter.propTypes = {
  employeesSort: PropTypes.func,
  caption: PropTypes.string
};

export default Filter;
