import { combineReducers } from 'redux';
import * as actions from '../actions';

const totalUsers = (state = 0, action) => {
  switch (action.type) {
    case actions.TOTAL_USERS_UPDATE:
      const { payload: { number } } = action;
      return number;
    default:
      return state
  }
};

const users = (state = [], action) => {
  switch (action.type) {
    case actions.USERS_GET_SUCCESS:
      const { payload: { items } } = action;
      return [...items];
    default:
      return state
  }
};

const query = (state = '', action) => {
  switch (action.type) {
    case actions.QUERY_UPDATE:
      const { payload: { value } } = action;
      return value;
    case actions.QUERY_RESET:
    case actions.USERS_GET_SUCCESS:
      return '';
    default:
      return state
  }
};

const isDataFetching = (state = false, action) => {
  switch (action.type) {
    case actions.USERS_GET_REQUEST:
    case actions.USERINFO_GET_REQUEST:
      return true;
    case actions.USERS_GET_SUCCESS:
    case actions.USERS_GET_FAILURE:
    case actions.USERINFO_GET_SUCCESS:
    case actions.USERINFO_GET_FAILURE:
    default:
      return false
  }
};

const userInfo = (state = {}, action) => {
  switch (action.type) {
    case actions.USERINFO_GET_SUCCESS:
      const { payload: { data } } = action;
      return data;
    default:
      return state
  }
};

const rootReducer = combineReducers({
  query,
  users,
  totalUsers,
  isDataFetching,
  userInfo,
});

export default rootReducer;
