import { combineReducers } from 'redux';
import users from './users';
import query from './query';
import isDataFetching from './is-data-fetching';
import userInfo from './user-info';
import repos from './repos';
import repoInfo from './repo-info';
import repoModal from './repo-modal';
import filter from './filter';
import sort from './sort';

const rootReducer = combineReducers({
  query,
  users,
  isDataFetching,
  userInfo,
  repos,
  repoInfo,
  repoModal,
  filter,
  sort,
});

export default rootReducer;
