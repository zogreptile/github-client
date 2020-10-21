function getUser(id) {
  return {
    id,
    avatar_url: 'https://avatars.dicebear.com/api/male/example.svg',
    events_url: 'https://api.github.com/users/zog/events{/privacy}',
    followers_url: 'https://api.github.com/users/zog/followers',
    following_url: 'https://api.github.com/users/zog/following{/other_user}',
    gists_url: 'https://api.github.com/users/zog/gists{/gist_id}',
    gravatar_id: '',
    html_url: 'https://github.com/zog',
    login: 'github_user',
    node_id: 'MDQ6VXNlcjI1NDM5Mw==',
    organizations_url: 'https://api.github.com/users/zog/orgs',
    received_events_url: 'https://api.github.com/users/zog/received_events',
    repos_url: 'https://api.github.com/users/zog/repos',
    score: 1,
    site_admin: false,
    starred_url: 'https://api.github.com/users/zog/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/zog/subscriptions',
    type: 'User',
    url: 'https://api.github.com/users/zog',
  };
};

const users = {
  incomplete_results: false,
  total_count: 653,
  items: Array(30).fill(null).map(() => getUser(Math.random())),
};

module.exports = users;
