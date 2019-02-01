export const QUERY_UPDATE = 'QUERY_UPDATE';

export const updateQuery = value => ({
  type: QUERY_UPDATE,
  payload: { value },
});
