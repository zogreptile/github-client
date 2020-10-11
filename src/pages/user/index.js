import { connect } from "react-redux";

import { getUserinfo } from 'src/actions/user-info';
import { getRepos } from 'src/actions/repos';
import { loadMoreRepos } from 'src/actions/load-more-repos';
import { getRepoInfo } from 'src/actions/repo-info';

import UserPage from './user';

const mapStateToProps = state => ({
  repos: state.repos.items,
  filter: state.filter,
  sort: state.sort,
  nextPageUrl: state.repos.pagination.next.url,
});

const mapDispatchToProps = {
  getUserinfo,
  getRepos,
  getRepoInfo,
  loadMoreRepos,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
