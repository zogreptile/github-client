import moment, { lang } from 'moment';

const filterFunctions = {
  hasOpenIssues: (repo, value) => {
    if (value === true) {
      return repo.open_issues_count ? true : false;
    }
    return true;
  },
  hasTopics: (repo, value) => {
    if (value === true) {
      return repo.topics.length ? true : false;
    }
    return true;
  },
  starred: (repo, stars) => (repo.stargazers_count >= stars),
  lastUpdateDate: (repo, date) => {
    if (!moment(date, 'DD-MM-YYYY').isValid()) {
      return true;
    }
    const reposDate = moment(repo.updated_at);
    const userDate = moment(date, 'DD-MM-YYYY');
    const diff = reposDate.diff(userDate, 'days');

    return (diff >= 0) ? true : false;
  },
  type: (repo, type) => {
    if (type === 'forks') {
      return repo.fork ? true : false;
    } else if (type === 'sources') {
      return !repo.fork ? true : false;
    }
    return true;
  },
  language: (repo, language) => {
    if (language === 'all') {
      return true;
    }
    return repo.language === language ? true : false;
  }
};

const applyFilters = (repos, filters) => {
  const filterNames = Object.keys(filters);

  return repos.reduce((acc, repo) => {
    let filtered = true;
    filterNames.forEach((filterName) => {
      const filterFunc = filterFunctions[filterName];
      if (filterFunc !== undefined) {
        filtered = filtered && filterFunc(repo, filters[filterName]);
      };
    });
    return filtered ? [ ...acc, repo ] : acc;
  }, []);
};

export default applyFilters;