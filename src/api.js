const base = 'https://api.github.com';

const routes = {
  getUsers: (query) => `${base}/search/users?q=${query}`,
  getUserinfo: (query) => `${base}/users/${query}`,
  getRepos: (username) => `${base}/users/${username}/repos`,
};

export default routes;