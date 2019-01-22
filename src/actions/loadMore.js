import axios from 'axios';
import parseLinkHeader from 'parse-link-header';

export const LOAD_MORE_REQUEST = 'LOAD_MORE_REQUEST';
export const loadMoreRequest = () => ({
  type: LOAD_MORE_REQUEST,
});

export const LOAD_MORE_FAILURE = 'LOAD_MORE_FAILURE';
export const loadMoreFailure = () => ({
  type: LOAD_MORE_FAILURE,
  payload: {
    message
  },
});

export const LOAD_MORE_SUCCESS = 'LOAD_MORE_SUCCESS';
export const loadMoreSuccess = (items, pagination) => ({
  type: LOAD_MORE_SUCCESS,
  payload: {
    items,
    pagination,
  },
});

export const loadMore = url => (dispatch) => {
  dispatch(loadMoreRequest());
  const headers = {
    'Accept': 'application/vnd.github.mercy-preview+json',
  };

  return axios
    .get(url, { headers })
    .then(
      (res) => {
        const { data, headers: { link } } = res;
        const parsedLinkHeader = parseLinkHeader(link);
        const pagination = parsedLinkHeader && parsedLinkHeader.next ?
          parsedLinkHeader :
          { next: { url: '' } };

        dispatch(loadMoreSuccess(data, pagination));
      },
      (err) => {
        dispatch(loadMoreFailure(err));
      }
    );
};
