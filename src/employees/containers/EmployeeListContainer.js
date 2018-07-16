import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getEmployees } from '../services/actions';
import EmployeesList from '../components/EmployeeList';

class EmployeeListContainer extends Component {
  static propTypes = {
    employees: PropTypes.arrayOf(PropTypes.object),
    getEmployees: PropTypes.func
  };

  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    return <EmployeesList employees={this.props.employees} />;
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees.list
  };
};

export default connect(mapStateToProps, { getEmployees })(EmployeeListContainer);
