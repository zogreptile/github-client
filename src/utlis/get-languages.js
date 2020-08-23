const getLanguages = (repos) => {
  const defaultValue = [
    'All',
    {
      text: 'All',
      value: 'all',
    },
  ];
  const languages = new Map([defaultValue]);
  repos.forEach(({ language }) => {
    language && languages.set(language, { text: language, value: language });
  });
  return [...languages.values()];
};

export default getLanguages;