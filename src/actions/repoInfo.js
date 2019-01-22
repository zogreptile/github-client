import axios from 'axios';
import api from '../api';

export const REPOINFO_GET_REQUEST = 'REPOINFO_GET_REQUEST';
export const getRepoInfoRequest = () => ({
  type: REPOINFO_GET_REQUEST,
});

export const REPOINFO_GET_SUCCESS = 'REPOINFO_GET_SUCCESS';
export const getRepoInfoSuccess = data => ({
  type: REPOINFO_GET_SUCCESS,
  payload: {
    data,
  },
});

export const REPOINFO_GET_FAILURE = 'REPOINFO_GET_FAILURE';
export const getRepoInfoFailure = message => ({
  type: REPOINFO_GET_FAILURE,
  payload: {
    message
  },
});

export const getRepoInfo = (username, reponame) => (dispatch) => {
  dispatch(getRepoInfoRequest());

  return axios
    .all([
      axios.get(api.getRepoGeneralInfo(username, reponame)),
      axios.get(api.getRepoContributors(username, reponame)),
      axios.get(api.getRepoLanguages(username, reponame)),
      axios.get(api.getRepoPopularPullRequests(username, reponame)),
    ])
    .then(axios.spread((generalInfo, contributors, languages, pullRequests) => {
      const result = { 
        general: generalInfo.data,
        contributors: contributors.data,
        languages: languages.data,
        pullRequests: pullRequests.data,
      };

      dispatch(getRepoInfoSuccess(result));
    }))
    .catch((err) => {
      dispatch(getRepoInfoFailure(err));
    });
};