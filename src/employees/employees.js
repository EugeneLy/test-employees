import React from 'react';

import FilterContainer from './containers/FilterContainer';
import EmployeeListContainer from './containers/EmployeeListContainer';
import PaginationContainer from './containers/PaginationContainer';

const Employees = () => {
  return (
    <div>
      <FilterContainer />
      <EmployeeListContainer />
      <PaginationContainer />
    </div>
  );
};

export default Employees;
