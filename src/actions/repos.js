import axios from 'axios';
import api from '../api';

export const REPOS_GET_REQUEST = 'REPOS_GET_REQUEST';
export const getReposRequest = () => ({
  type: REPOS_GET_REQUEST,
});

export const REPOS_GET_SUCCESS = 'REPOS_GET_SUCCESS';
export const getReposSuccess = data => ({
  type: REPOS_GET_SUCCESS,
  payload: {
    data,
  },
});

export const REPOS_GET_FAILURE = 'REPOS_GET_FAILURE';
export const getReposFailure = message => ({
  type: REPOS_GET_FAILURE,
  payload: {
    message
  },
});

export const getRepos = query => (dispatch) => {
  dispatch(getReposRequest());

  return axios
    .get(api.getRepos(query))
    .then(
      (res) => {
        const { data } = res;
        console.log('RESPONSE_REPOS: ', data);
        dispatch(getReposSuccess(data));
      },
      (err) => {
        console.log(err);
        dispatch(getReposFailure(err));
      }
    );
};