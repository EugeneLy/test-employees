import axios from 'axios';

export default {
  fetchEmployees() {
    return axios.get('http://localhost:3000/employees?_page=1');
  },

  fetchPage(page = 1, sortParam = '') {
    return axios.get(`http://localhost:3000/employees?_page=${page}${sortParam}`);
  },

  fetchSortedEmployees() {
    return axios.get('http://localhost:3000/employees?_sort=first_name&_order=asc&_page=1');
  }
};
