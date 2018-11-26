import axios from 'axios';
import api from '../api';

export const QUERY_UPDATE = 'QUERY_UPDATE';
export const QUERY_RESET = 'QUERY_RESET';
export const updateQuery = value => ({
  type: QUERY_UPDATE,
  payload: { value },
});

export const TOTAL_USERS_UPDATE = 'TOTAL_USERS_UPDATE';
export const updateTotalUsers = (number) => ({
  type: TOTAL_USERS_UPDATE,
  payload: { number }
});

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
        const { data } = res;
        dispatch(getUsersSuccess(data.items));
        dispatch(updateTotalUsers(data.total_count));
      },
      (err) => {
        console.log(err);
        dispatch(getUsersFailure(err));
      }
    );
};

export const USERINFO_GET_REQUEST = 'USERINFO_GET_REQUEST';
export const getUserinfoRequest = () => ({
  type: USERINFO_GET_REQUEST,
});

export const USERINFO_GET_SUCCESS = 'USERINFO_GET_SUCCESS';
export const getUserinfoSuccess = data => ({
  type: USERINFO_GET_SUCCESS,
  payload: {
    data,
  },
});

export const USERINFO_GET_FAILURE = 'USERINFO_GET_FAILURE';
export const getUserinfoFailure = message => ({
  type: USERINFO_GET_FAILURE,
  payload: {
    message
  },
});

export const getUserinfo = query => (dispatch) => {
  dispatch(getUserinfoRequest());

  return axios
    .get(api.getUserinfo(query))
    .then(
      (res) => {
        const { data } = res;
        console.log('RESPONSE: ', data);
        dispatch(getUserinfoSuccess(data));
      },
      (err) => {
        console.log(err);
        dispatch(getUserinfoFailure(err));
      }
    );
};