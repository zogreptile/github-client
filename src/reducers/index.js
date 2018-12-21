import { combineReducers } from 'redux';
import actions from '../actions';

const totalUsers = (state = 0, action) => {
  switch (action.type) {
    case actions.USERS_GET_SUCCESS:
      const { payload: { data : { total_count } } } = action;
      return total_count;
    default:
      return state
  }
};

const users = (state = [], action) => {
  switch (action.type) {
    case actions.USERS_GET_SUCCESS:
      const { payload: { data: { items } } } = action;
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
    case actions.REPOS_GET_REQUEST:
      return true;
    case actions.USERS_GET_SUCCESS:
    case actions.USERS_GET_FAILURE:
    case actions.USERINFO_GET_SUCCESS:
    case actions.USERINFO_GET_FAILURE:
    case actions.REPOS_GET_SUCCESS:
    case actions.REPOS_GET_FAILURE:
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

const repos = (state = [], action) => {
  switch (action.type) {
    case actions.REPOS_GET_SUCCESS:
      const { payload: { data } } = action;
      return data;
    default:
      return state
  }
};

const filterInit = {
  hasOpenIssues: false,
  hasTopics: false,
  starred: 0,
  lastUpdateDate: '',
  type: 'all',
  language: 'all',
};
const filter = (state = filterInit, action) => {
  switch (action.type) {
    case actions.FILTER_ISSUES:
      const { payload: { value: issuesFilterValue } } = action;
      return { ...state, hasOpenIssues: issuesFilterValue };
    case actions.FILTER_TOPICS:
      const { payload: { value: topicsFilterValue } } = action;
      return { ...state, hasTopics: topicsFilterValue };
    case actions.FILTER_STARRED:
      const { payload: { number } } = action;
      return { ...state, starred: number };
    case actions.FILTER_LAST_UPDATED:
      const { payload: { date } } = action;
      return { ...state, lastUpdateDate: date };
    case actions.FILTER_TYPE:
      const { payload: { name } } = action;
      return { ...state, type: name };
    case actions.FILTER_LANGUAGE:
      const { payload: { value } } = action;
      return { ...state, language: value };
    case actions.FILTER_RESET:
    case actions.USERINFO_GET_SUCCESS:
      return { ...filterInit };
    default:
      return state
  }
};

const sortInit = {
  type: 'none',
  direction: 'desc',
};
const sort = (state = sortInit, action) => {
  switch (action.type) {
    case actions.SORT_TYPE:
      const { payload: { type } } = action;
      return { ...state, type };
    case actions.SORT_DIRECTION:
      const { payload: { direction } } = action;
      return { ...state, direction };
    case actions.SORT_RESET:
    case actions.USERINFO_GET_SUCCESS:
      return { ...sortInit };
    default:
      return state
  }
}

const rootReducer = combineReducers({
  query,
  users,
  totalUsers,
  isDataFetching,
  userInfo,
  repos,
  filter,
  sort,
});

export default rootReducer;
