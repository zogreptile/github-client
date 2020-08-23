import {
  REPOS_GET_SUCCESS,
  REPOS_GET_REQUEST,
} from 'src/actions/repos';
import { LOAD_MORE_REPOS_SUCCESS } from 'src/actions/load-more-repos';

const reposInit = {
  items: [],
  pagination: {
    next: {
      url: '',
    },
  },
};

const repos = (state = reposInit, action) => {
  switch (action.type) {
    case REPOS_GET_SUCCESS:
    case LOAD_MORE_REPOS_SUCCESS:
      const { payload: { items, pagination } } = action;
      return {
        items: [...state.items, ...items],
        pagination,
      };
    case REPOS_GET_REQUEST:
      return { ...reposInit };
    default:
      return state
  }
};

export default repos;
