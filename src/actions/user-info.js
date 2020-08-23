import axios from 'axios';
import api from 'src/api';

export const USERINFO_GET_REQUEST = 'USERINFO_GET_REQUEST';
export const USERINFO_GET_SUCCESS = 'USERINFO_GET_SUCCESS';
export const USERINFO_GET_FAILURE = 'USERINFO_GET_FAILURE';

export const getUserinfoRequest = () => ({
  type: USERINFO_GET_REQUEST,
});

export const getUserinfoSuccess = data => ({
  type: USERINFO_GET_SUCCESS,
  payload: {
    data,
  },
});

export const getUserinfoFailure = message => ({
  type: USERINFO_GET_FAILURE,
  payload: {
    message
  },
});

export const getUserinfo = query => async (dispatch) => {
  dispatch(getUserinfoRequest());

  try {
    const { data } = await axios.get(api.getUserinfo(query));
    dispatch(getUserinfoSuccess(data));
  } catch (err) {
    dispatch(getUserinfoFailure(err));
  };
};
