import * as query from './query';
import * as users from './users';
import * as userInfo from './userInfo';
import * as repos from './repos';
import * as repoInfo from './repoInfo';
import * as repoModal from './repoModal';
import * as filter from './filter';
import * as sort from './sort';
import * as loadMore from './loadMore';

export default {
  ...query,
  ...users,
  ...userInfo,
  ...repos,
  ...repoInfo,
  ...repoModal,
  ...filter,
  ...sort,
  ...loadMore,
};
