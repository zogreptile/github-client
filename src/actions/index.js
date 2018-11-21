import axios from 'axios';
import api from '../api';

export const USERS_GET_REQUEST = 'USERS_GET_REQUEST';
export const getUsersRequest = () => ({
  type: USERS_GET_REQUEST,
});

export const USERS_GET_SUCCESS = 'USERS_GET_SUCCESS';
export const getUsersSuccess = data => ({
  type: USERS_GET_SUCCESS,
  payload: {
    items: data,
  },
});

export const USERS_GET_FAILURE = 'USERS_GET_FAILURE';
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
        const { data: { items } } = res;
        dispatch(getUsersSuccess(items));
      },
      (err) => {
        console.log(err);
        dispatch(getUsersFailure(err));
      }
    );
};

export const QUERY_UPDATE = 'QUERY_UPDATE';
export const QUERY_RESET = 'QUERY_RESET';
export const updateQuery = value => ({
  type: QUERY_UPDATE,
  payload: { value },
});
