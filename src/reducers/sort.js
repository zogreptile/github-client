import {
  SORT_TYPE,
  SORT_DIRECTION,
  SORT_RESET,
} from 'src/actions/sort';
import { USERINFO_GET_SUCCESS } from 'src/actions/user-info';

const sortInit = {
  type: 'none',
  direction: 'desc',
};

const sort = (state = sortInit, action) => {
  switch (action.type) {
    case SORT_TYPE:
      const { payload: { type } } = action;
      return { ...state, type };
    case SORT_DIRECTION:
      const { payload: { direction } } = action;
      return { ...state, direction };
    case SORT_RESET:
    case USERINFO_GET_SUCCESS:
      return { ...sortInit };
    default:
      return state
  }
};

export default sort;
