import axios from 'axios';
import parseLinkHeader from 'parse-link-header';
import api from 'src/api';

export const REPOS_GET_REQUEST = 'REPOS_GET_REQUEST';
export const REPOS_GET_SUCCESS = 'REPOS_GET_SUCCESS';
export const REPOS_GET_FAILURE = 'REPOS_GET_FAILURE';

export const getReposRequest = () => ({
  type: REPOS_GET_REQUEST,
});

export const getReposSuccess = (items, pagination) => ({
  type: REPOS_GET_SUCCESS,
  payload: {
    items,
    pagination,
  },
});

export const getReposFailure = message => ({
  type: REPOS_GET_FAILURE,
  payload: {
    message
  },
});

export const getRepos = (username) => async (dispatch) => {
  dispatch(getReposRequest());
  const headers = {
    'Accept': 'application/vnd.github.mercy-preview+json',
  };

  try {
    const { data, headers: { link } } = await axios.get(api.getRepos(username), { headers });
    const pagination = parseLinkHeader(link) || { next: { url: '' } };
    dispatch(getReposSuccess(data, pagination));
  } catch (err) {
    dispatch(getReposFailure(err));
  };
};
