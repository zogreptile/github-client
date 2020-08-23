import { USERINFO_GET_SUCCESS } from 'src/actions/user-info';

const userInfo = (state = {}, action) => {
  switch (action.type) {
    case USERINFO_GET_SUCCESS:
      const { payload: { data } } = action;
      return data;
    default:
      return state
  }
};

export default userInfo;
