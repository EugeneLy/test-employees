import api from './api';

export function getEmployees() {
  return (dispatch) => {
    api.fetchEmployees().then((response) => {
      dispatch({
        type: 'LOAD_EMPLOYEES_SUCCESS',
        payload: {
          employees: response.data,
          headerLink: response.headers.link
        }
      });
    });
  };
}

export function changePage(page, sortParam) {
  return (dispatch) => {
    api.fetchPage(page, sortParam).then((response) => {
      dispatch({
        type: 'PAGE_CHANGED',
        payload: {
          employees: response.data,
          headerLink: response.headers.link
        }
      });
    });
  };
}

export function sortEmployees() {
  return (dispatch) => {
    api.fetchSortedEmployees().then((response) => {
      dispatch({
        type: 'SORTED_ASC',
        payload: {
          employees: response.data,
          headerLink: response.headers.link
        }
      });
    });
  };
}
