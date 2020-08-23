import {
  USERS_GET_REQUEST,
  USERS_GET_SUCCESS,
} from 'src/actions/users';
import { LOAD_MORE_USERS_SUCCESS } from 'src/actions/load-more-users';

const usersInit = {
  items: [],
  pagination: {
    next: {
      url: '',
    },
  },
};

const users = (state = usersInit, action) => {
  switch (action.type) {
    case USERS_GET_REQUEST:
      return { ...usersInit };
    case USERS_GET_SUCCESS:
    case LOAD_MORE_USERS_SUCCESS:
      const { payload: { items, pagination } } = action;
      return {
        items: [...state.items, ...items],
        pagination,
      };
    default:
      return state
  }
};

export default users;
