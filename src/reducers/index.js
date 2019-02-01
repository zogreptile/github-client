import { combineReducers } from 'redux';
import users from './users';
import query from './query';
import isDataFetching from './isDataFetching';
import userInfo from './userInfo';
import repos from './repos';
import repoInfo from './repoInfo';
import repoModal from './repoModal';
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
