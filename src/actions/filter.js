export const FILTER_ISSUES = 'FILTER_ISSUES';
export const issuesFilter = value => ({
  type: FILTER_ISSUES,
  payload: { value },
});

export const FILTER_TOPICS = 'FILTER_TOPICS';
export const topicsFilter = value => ({
  type: FILTER_TOPICS,
  payload: { value },
});

export const FILTER_STARRED = 'FILTER_STARRED';
export const starredFilter = number => ({
  type: FILTER_STARRED,
  payload: {
    number: Number(number),
  }
});

export const FILTER_LAST_UPDATED = 'FILTER_LAST_UPDATED';
export const lastUpdatedFilter = date => ({
  type: FILTER_LAST_UPDATED,
  payload: { date },
});

export const FILTER_TYPE = 'FILTER_TYPE';
export const typeFilter = name => ({
  type: FILTER_TYPE,
  payload: { name },
});

export const FILTER_RESET = 'FILTER_RESET';
export const resetFilter = () => ({
  type: FILTER_RESET,
});
