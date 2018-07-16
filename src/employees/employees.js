import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getEmployees } from './services/actions';

import FilterContainer from './containers/FilterContainer';
import EmployeeListContainer from './containers/EmployeeListContainer';
import PaginationContainer from './containers/PaginationContainer';

class Employees extends Component {
  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    return (
      <div>
        <FilterContainer />
        <EmployeeListContainer />
        <PaginationContainer />
      </div>
    );
  }
}

Employees.propTypes = {
  getEmployees: PropTypes.func
};

export default connect(null, { getEmployees })(Employees);
