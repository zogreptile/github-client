import axios from 'axios';
import parseLinkHeader from 'parse-link-header';

export const LOAD_MORE_REPOS_REQUEST = 'LOAD_MORE_REPOS_REQUEST';
export const LOAD_MORE_REPOS_FAILURE = 'LOAD_MORE_REPOS_FAILURE';
export const LOAD_MORE_REPOS_SUCCESS = 'LOAD_MORE_REPOS_SUCCESS';

export const loadMoreReposRequest = () => ({
  type: LOAD_MORE_REPOS_REQUEST,
});

export const loadMoreReposFailure = () => ({
  type: LOAD_MORE_REPOS_FAILURE,
  payload: {
    message
  },
});

export const loadMoreReposSuccess = (items, pagination) => ({
  type: LOAD_MORE_REPOS_SUCCESS,
  payload: {
    items,
    pagination,
  },
});

export const loadMoreRepos = url => async (dispatch) => {
  dispatch(loadMoreReposRequest());
  const headers = {
    'Accept': 'application/vnd.github.mercy-preview+json',
  };

  try {
    const { data, headers: { link } } = await axios.get(url, { headers });
    const parsedLinkHeader = parseLinkHeader(link);
    const pagination = parsedLinkHeader && parsedLinkHeader.next ?
      parsedLinkHeader :
      { next: { url: '' } };
    dispatch(loadMoreReposSuccess(data, pagination));
  } catch (err) {
    dispatch(loadMoreReposFailure(err));
  };
};
