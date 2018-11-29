import axios from 'axios';
import api from '../api';

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
        console.log('RESPONSE_INFO: ', data);
        dispatch(getUserinfoSuccess(data));
      },
      (err) => {
        console.log(err);
        dispatch(getUserinfoFailure(err));
      }
    );
};