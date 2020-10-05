import {
  USERS_GET_REQUEST,
  USERS_GET_SUCCESS,
  USERS_GET_FAILURE,
} from 'src/actions/users';
import {
  LOAD_MORE_USERS_REQUEST,
  LOAD_MORE_USERS_SUCCESS,
  LOAD_MORE_USERS_FAILURE,
} from 'src/actions/load-more-users';

const usersInit = {
  isFetching: false,
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
      return {
        ...usersInit,
        isFetching: true,
      };

    case LOAD_MORE_USERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case USERS_GET_SUCCESS:
    case LOAD_MORE_USERS_SUCCESS:
      const { payload: { items, pagination } } = action;

      return {
        isFetching: false,
        items: [...state.items, ...items],
        pagination,
      };

    case USERS_GET_FAILURE:
    case LOAD_MORE_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default users;
