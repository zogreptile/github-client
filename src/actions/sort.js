export const SORT_TYPE = 'SORT_TYPE';
export const setSortType = (type) => ({
  type: SORT_TYPE,
  payload: { type },
});

export const SORT_DIRECTION = 'SORT_DIRECTION';
export const setSortDirection = (direction) => ({
  type: SORT_DIRECTION,
  payload: { direction },
});

export const SORT_RESET = 'SORT_RESET';
export const resetSort = () => ({
  type: SORT_RESET,
});
