const base = 'https://api.github.com';

const routes = {
  getUsers: (query) => `${base}/search/users?q=${query}`,
};

export default routes;