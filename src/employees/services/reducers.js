const initialState = { list: [], headerLink: '', sorted: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_EMPLOYEES_SUCCESS':
      return {
        ...state,
        list: action.payload.employees,
        headerLink: action.payload.headerLink,
        sorted: false
      };
    case 'PAGE_CHANGED':
      return {
        ...state,
        list: action.payload.employees,
        headerLink: action.payload.headerLink
      };

    case 'SORTED_ASC':
      return {
        ...state,
        list: action.payload.employees,
        headerLink: action.payload.headerLink,
        sorted: true
      };

    default:
      return state;
  }
};
