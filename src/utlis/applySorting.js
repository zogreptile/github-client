import moment from 'moment';

const sortFunctions = {
  none: a => a,
  name: (a, b, direction) => {
    if (direction === 'desc') {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    }
    if (direction === 'asc') {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    }
  },
  stars: (a, b, direction) => {
    if (direction === 'desc') {
      return b.stargazers_count - a.stargazers_count;
    } else if (direction === 'asc') {
      return a.stargazers_count - b.stargazers_count;
    }
    return a;
  },
  openedIssues: (a, b, direction) => {
    if (direction === 'desc') {
      return b.open_issues_count - a.open_issues_count;
    } else if (direction === 'asc') {
      return a.open_issues_count - b.open_issues_count;
    }
    return a;
  },
  updatedDate: (a, b, direction) => {
    const date1 = moment(a.updated_at);
    const date2 = moment(b.updated_at);
    if (direction === 'desc') {
      return date2.diff(date1, 'days');
    } else if (direction === 'asc') {
      return date1.diff(date2, 'days');
    }
    return a;
  },
};

const applySorting = (repos, { type, direction }) => {
  const sortFunc = sortFunctions[type];
  return repos.sort((a, b) => sortFunc(a, b, direction));
};

export default applySorting;
