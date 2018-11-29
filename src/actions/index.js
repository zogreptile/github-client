import * as query from './query';
import * as users from './users';
import * as userInfo from './userInfo';
import * as repos from './repos';

export default {
  ...query,
  ...users,
  ...userInfo,
  ...repos,
};
