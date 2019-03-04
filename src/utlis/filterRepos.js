import moment from 'moment';

const filterFunctions = {
  hasOpenIssues: (repo, value) => {
    if (value) {
      return repo.open_issues_count;
    }
    return true;
  },
  hasTopics: (repo, value) => {
    if (value) {
      return repo.topics.length;
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

    return diff >= 0;
  },
  type: (repo, type) => {
    switch (type) {
      case 'forks':
        return repo.fork;
      case 'sources':
        return !repo.fork;
      case 'all':
      default:
        return true;
    }
  },
  language: (repo, language) => {
    if (language === 'all') {
      return true;
    }
    return repo.language === language;
  }
};

const filterRepos = filters => (repos) => {
  const filterNames = Object.keys(filters);

  return repos.reduce((acc, repo) => {
    let filtered = true;
    filterNames.forEach((filterName) => {
      const filterFunc = filterFunctions[filterName];
      if (filterFunc) {
        filtered = filtered && filterFunc(repo, filters[filterName]);
      };
    });
    return filtered ? [ ...acc, repo ] : acc;
  }, []);
};

export default filterRepos;