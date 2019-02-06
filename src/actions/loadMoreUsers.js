import axios from 'axios';
import parseLinkHeader from 'parse-link-header';

export const LOAD_MORE_USERS_REQUEST = 'LOAD_MORE_USERS_REQUEST';
export const LOAD_MORE_USERS_FAILURE = 'LOAD_MORE_USERS_FAILURE';
export const LOAD_MORE_USERS_SUCCESS = 'LOAD_MORE_USERS_SUCCESS';

export const loadMoreUsersRequest = () => ({
  type: LOAD_MORE_USERS_REQUEST,
});

export const loadMoreUsersFailure = () => ({
  type: LOAD_MORE_USERS_FAILURE,
  payload: {
    message
  },
});

export const loadMoreUsersSuccess = (items, pagination) => ({
  type: LOAD_MORE_USERS_SUCCESS,
  payload: {
    items,
    pagination,
  },
});

export const loadMoreUsers = url => async (dispatch) => {
  dispatch(loadMoreUsersRequest());
  const headers = {
    'Accept': 'application/vnd.github.mercy-preview+json',
  };

  try {
    const { data: { items }, headers: { link } } = await axios.get(url, { headers });
    const parsedLinkHeader = parseLinkHeader(link);
    const pagination = parsedLinkHeader && parsedLinkHeader.next ?
      parsedLinkHeader :
      { next: { url: '' } };
    dispatch(loadMoreUsersSuccess(items, pagination));
  } catch (err) {
    dispatch(loadMoreUsersFailure(err));
  };
};
