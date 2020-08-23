import { REPOINFO_GET_SUCCESS } from 'src/actions/repo-info';

const repoInfo = (state = {}, action) => {
  switch (action.type) {
    case REPOINFO_GET_SUCCESS:
      const { payload: { data } } = action;
      return data;
    default:
      return state
  }
};

export default repoInfo;
