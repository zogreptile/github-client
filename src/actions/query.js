export const QUERY_UPDATE = 'QUERY_UPDATE';
export const QUERY_RESET = 'QUERY_RESET';
export const updateQuery = value => ({
  type: QUERY_UPDATE,
  payload: { value },
});