import {
  REPO_MODAL_OPEN,
  REPO_MODAL_CLOSE,
} from '../actions/repoModal';
import { REPOINFO_GET_SUCCESS } from '../actions/repoInfo';

const repoModal = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case REPO_MODAL_OPEN:
    case REPO_MODAL_CLOSE:
      const { payload } = action;
      return payload;
    case REPOINFO_GET_SUCCESS:
      return { isOpen: true };
    default:
      return state
  }
};

export default repoModal;
