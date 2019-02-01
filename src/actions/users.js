import axios from 'axios';
import parseLinkHeader from 'parse-link-header';
import api from '../api';

export const USERS_GET_REQUEST = 'USERS_GET_REQUEST';
export const USERS_GET_SUCCESS = 'USERS_GET_SUCCESS';
export const USERS_GET_FAILURE = 'USERS_GET_FAILURE';

export const getUsersRequest = () => ({
  type: USERS_GET_REQUEST,
});

export const getUsersSuccess = (items, pagination) => ({
  type: USERS_GET_SUCCESS,
  payload: {
    items,
    pagination,
  },
});

export const getUsersFailure = message => ({
  type: USERS_GET_FAILURE,
  payload: {
    message
  },
});

export const getUsers = query => (dispatch) => {
  dispatch(getUsersRequest());

  return axios
    .get(api.getUsers(query))
    .then(
      (res) => {
        const { data: { items }, headers: { link } } = res;
        const parsedLinkHeader = parseLinkHeader(link);
        const pagination = parsedLinkHeader && parsedLinkHeader.next.url ?
          parsedLinkHeader :
          { next: { url: '' } };

        dispatch(getUsersSuccess(items, pagination));
      },
      (err) => {
        dispatch(getUsersFailure(err));
      }
    );
};