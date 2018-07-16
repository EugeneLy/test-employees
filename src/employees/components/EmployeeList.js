import React from 'react';
import PropTypes from 'prop-types';

import Employee from './Employee';

import './EmployeeList.scss';

const EmployeeList = (props) => {
  const renderEmployees = (employees) => {
    return employees.map((employee) => {
      return <Employee key={employee.id} employee={employee} />;
    });
  };

  return (
    <ul className="employee-list">
      {renderEmployees(props.employees)}
    </ul>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.objectOf)
};

export default EmployeeList;
