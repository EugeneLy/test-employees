import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EmployeesList from '../components/EmployeeList';

class EmployeeListContainer extends Component {
  render() {
    return <EmployeesList employees={this.props.employees} />;
  }
}

EmployeeListContainer.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = (state) => {
  return {
    employees: state.employees.list
  };
};

export default connect(mapStateToProps)(EmployeeListContainer);
