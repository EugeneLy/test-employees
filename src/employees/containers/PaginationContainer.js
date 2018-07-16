import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changePage } from '../services/actions';
import { parseHeaderLink } from '../services/parseHeaderLink';

import Pagination from '../components/Pagination';

class PaginationContainer extends Component {
  static propTypes = {
    changePage: PropTypes.func,
    headerLink: PropTypes.string,
    sorted: PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.state = {
      disabledPrev: 'disabled',
      disabledNext: null
    };

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  checkSortParam() {
    return this.props.sorted ? '&_sort=first_name&_order=asc' : '';
  }

  nextPage() {
    const link = parseHeaderLink(this.props.headerLink);
    const sortParam = this.checkSortParam();

    if (link.next) {
      this.props.changePage(link.next._page, sortParam);

      this.setState({ disabledPrev: null });
    }

    if (!link.next) {
      this.setState({ disabledNext: 'disabled' });
    }
  }

  prevPage() {
    const link = parseHeaderLink(this.props.headerLink);
    const sortParam = this.checkSortParam();

    if (link.prev) {
      this.props.changePage(link.prev._page, sortParam);
      this.setState({ disabledPrev: null });

      if (link.prev._page === '1') {
        this.setState({ disabledPrev: 'disabled' });
      }
    }
  }

  render() {
    return (
      <Pagination
        nextPage={this.nextPage}
        prevPage={this.prevPage}
        disabledPrev={this.state.disabledPrev}
        disabledNext={this.state.disabledNext}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    headerLink: state.employees.headerLink,
    sorted: state.employees.sorted
  };
};

export default connect(mapStateToProps, { changePage })(PaginationContainer);
