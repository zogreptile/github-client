import {
  USERINFO_GET_REQUEST,
  USERINFO_GET_SUCCESS,
  USERINFO_GET_FAILURE,
} from 'src/actions/user-info';
import {
  REPOS_GET_REQUEST,
  REPOS_GET_SUCCESS,
  REPOS_GET_FAILURE,
} from 'src/actions/repos';
import {
  REPOINFO_GET_REQUEST,
  REPOINFO_GET_SUCCESS,
  REPOINFO_GET_FAILURE,
} from 'src/actions/repo-info';

const isDataFetching = (state = false, action) => {
  switch (action.type) {
    case USERINFO_GET_REQUEST:
    case REPOS_GET_REQUEST:
    case REPOINFO_GET_REQUEST:
      return true;
    case USERINFO_GET_SUCCESS:
    case USERINFO_GET_FAILURE:
    case REPOS_GET_SUCCESS:
    case REPOS_GET_FAILURE:
    case REPOINFO_GET_SUCCESS:
    case REPOINFO_GET_FAILURE:
    default:
      return false
  }
};

export default isDataFetching;
