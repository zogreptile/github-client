const base = 'https://api.github.com';

const routes = {
  getUsers: (query) => `${base}/search/users?q=${query}`,
  getUserinfo: (query) => `${base}/users/${query}`,
  getRepos: (username) => `${base}/users/${username}/repos`,
  getRepoGeneralInfo: (username, reponame) => `${base}/repos/${username}/${reponame}`,
  getRepoContributors: (username, reponame) => `${base}/repos/${username}/${reponame}/contributors`,
  getRepoLanguages: (username, reponame) => `${base}/repos/${username}/${reponame}/languages`,
  getRepoPopularPullRequests: (username, reponame) => `${base}/repos/${username}/${reponame}/pulls?sort=popularity&direction=desc`,
};

export default routes;