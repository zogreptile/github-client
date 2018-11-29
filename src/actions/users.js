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
    data,
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
        const { data } = res;
        console.log('GET_USERS: ', data);
        dispatch(getUsersSuccess(data));
      },
      (err) => {
        console.log(err);
        dispatch(getUsersFailure(err));
      }
    );
};