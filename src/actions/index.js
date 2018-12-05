import * as query from './query';
import * as users from './users';
import * as userInfo from './userInfo';
import * as repos from './repos';
import * as filter from './filter';

export default {
  ...query,
  ...users,
  ...userInfo,
  ...repos,
  ...filter,
};
