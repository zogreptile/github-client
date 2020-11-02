const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

const users = require('src/mocks/users');
const user = require('src/mocks/user');
const repos = require('src/mocks/repos');

const mock = new MockAdapter(axios);

mock
  .onGet(/\/search\/users(.*)/)
  .reply(() => {
    const headers = {
      link: '<https://api.github.com/search/users?q=zog&page=2>; rel="next", <https://api.github.com/search/users?q=zog&page=22>; rel="last"',
    };

    return [
      200,
      users,
      headers,
    ];
  });

mock
  .onGet(/\/users\/(.*)\/repos/)
  .reply((config) => {
    const headers = {
      link: '<https://api.github.com/user/174688/repos?page=2>; rel="next", <https://api.github.com/user/174688/repos?page=3>; rel="last"',
    };

    return [
      200,
      repos,
      headers,
    ];
  });

mock
  .onGet(/\/users\/(.*)/)
  .reply(() => {
    return [
      200,
      user,
    ];
  });
