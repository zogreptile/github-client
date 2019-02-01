import { QUERY_UPDATE } from '../actions/query'
import { USERS_GET_SUCCESS } from '../actions/users'

const query = (state = '', action) => {
  switch (action.type) {
    case QUERY_UPDATE:
      const { payload: { value } } = action;
      return value;
    case USERS_GET_SUCCESS:
      return '';
    default:
      return state
  }
};

export default query;
