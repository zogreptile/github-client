import { connect } from "react-redux";

import { getUserinfo } from 'src/actions/user-info';
import { getRepos } from 'src/actions/repos';
import { loadMoreRepos } from 'src/actions/load-more-repos';
import { getRepoInfo } from 'src/actions/repo-info';
import {
  issuesFilter,
  topicsFilter,
  starredFilter,
  lastUpdatedFilter,
  typeFilter,
  languageFilter,
  resetFilter,
} from 'src/actions/filter';
import {
  openRepoModal,
  closeRepoModal,
} from 'src/actions/repo-modal';
import {
  setSortType,
  setSortDirection,
  resetSort,
} from 'src/actions/sort';

import UserPage from './user';

const mapStateToProps = state => ({
  repos: state.repos.items,
  filter: state.filter,
  sort: state.sort,
  nextPageUrl: state.repos.pagination.next.url,
  repoInfo: state.repoInfo,
  repoModal: state.repoModal,
});

const mapDispatchToProps = {
  getUserinfo,
  getRepos,
  getRepoInfo,
  loadMoreRepos,
  openRepoModal,
  closeRepoModal,

  issuesFilter,
  topicsFilter,
  starredFilter,
  lastUpdatedFilter,
  typeFilter,
  languageFilter,
  resetFilter,

  setSortType,
  setSortDirection,
  resetSort,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
