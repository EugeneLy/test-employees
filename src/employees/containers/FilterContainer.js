import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sortEmployees, getEmployees } from '../services/actions';

import Filter from '../components/Filter';

class FilterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      caption: 'Sort ascending'
    };

    this.employeesSort = this.employeesSort.bind(this);
  }

  employeesSort() {
    if (this.props.sorted) {
      this.props.getEmployees();
      this.setState({ caption: 'Sort ascending' });
    } else {
      this.props.sortEmployees();
      this.setState({ caption: 'Sort by default' });
    }
  }

  render() {
    return (
      <Filter
        employeesSort={this.employeesSort}
        caption={this.state.caption}
      />
    );
  }
}

FilterContainer.propTypes = {
  sortEmployees: PropTypes.func,
  getEmployees: PropTypes.func,
  sorted: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    sorted: state.employees.sorted
  };
};

export default connect(mapStateToProps, { sortEmployees, getEmployees })(FilterContainer);
