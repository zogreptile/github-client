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
  type: (repo, type) => {
    if (type === 'forks') {
      return repo.fork ? true : false;
    } else if (type === 'sources') {
      return !repo.fork ? true : false;
    }
    return true;
  },
};

const applyFilters = (repos, filters) => {
  const filterNames = Object.keys(filters);

  return repos.reduce((acc, repo) => {
    let filtered = true;
    filterNames.forEach((filterName) => {
      const filterFunc = filterFunctions[filterName];
      filtered = filtered && filterFunc(repo, filters[filterName]);
    });
    return filtered ? [ ...acc, repo ] : acc;
  }, []);
};

export default applyFilters;