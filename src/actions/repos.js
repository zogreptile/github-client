import axios from 'axios';
import parseLinkHeader from 'parse-link-header';
import api from '../api';

export const REPOS_GET_REQUEST = 'REPOS_GET_REQUEST';
export const getReposRequest = () => ({
  type: REPOS_GET_REQUEST,
});

export const REPOS_GET_SUCCESS = 'REPOS_GET_SUCCESS';
export const getReposSuccess = (items, pagination) => ({
  type: REPOS_GET_SUCCESS,
  payload: {
    items,
    pagination,
  },
});

export const REPOS_GET_FAILURE = 'REPOS_GET_FAILURE';
export const getReposFailure = message => ({
  type: REPOS_GET_FAILURE,
  payload: {
    message
  },
});

export const getRepos = (username) => (dispatch) => {
  dispatch(getReposRequest());
  const headers = {
    'Accept': 'application/vnd.github.mercy-preview+json',
  };

  return axios
    .get(api.getRepos(username), { headers })
    .then(
      (res) => {
        const { data, headers: { link } } = res;
        const pagination = parseLinkHeader(link) || { next: { url: '' } };

        dispatch(getReposSuccess(data, pagination));
      },
      (err) => {
        dispatch(getReposFailure(err));
      }
    );
};