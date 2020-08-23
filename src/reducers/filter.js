import {
  FILTER_ISSUES,
  FILTER_TOPICS,
  FILTER_STARRED,
  FILTER_LAST_UPDATED,
  FILTER_TYPE,
  FILTER_LANGUAGE,
  FILTER_RESET,
} from 'src/actions/filter';
import { USERINFO_GET_SUCCESS } from 'src/actions/user-info';

const filterInit = {
  hasOpenIssues: false,
  hasTopics: false,
  starred: 0,
  lastUpdateDate: '',
  type: 'all',
  language: 'all',
};

const filter = (state = filterInit, action) => {
  switch (action.type) {
    case FILTER_ISSUES:
      const { payload: { value: issuesFilterValue } } = action;
      return { ...state, hasOpenIssues: issuesFilterValue };
    case FILTER_TOPICS:
      const { payload: { value: topicsFilterValue } } = action;
      return { ...state, hasTopics: topicsFilterValue };
    case FILTER_STARRED:
      const { payload: { number } } = action;
      return { ...state, starred: number };
    case FILTER_LAST_UPDATED:
      const { payload: { date } } = action;
      return { ...state, lastUpdateDate: date };
    case FILTER_TYPE:
      const { payload: { name } } = action;
      return { ...state, type: name };
    case FILTER_LANGUAGE:
      const { payload: { value } } = action;
      return { ...state, language: value };
    case FILTER_RESET:
    case USERINFO_GET_SUCCESS:
      return { ...filterInit };
    default:
      return state
  }
};

export default filter;
