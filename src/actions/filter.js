export const FILTER_STARRED = 'FILTER_STARRED';
export const starredFilter = number => ({
  type: FILTER_STARRED,
  payload: {
    number: Number(number),
  }
});
