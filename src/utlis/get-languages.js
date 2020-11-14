const getLanguages = (repos) => {
  const languages = {
    All: { text: 'All', value: 'All' },
  };

  repos.forEach(({ language }) => {
    if (language) {
      languages[language] = { text: language, value: language };
    }
  });

  return Object.values(languages);
};

export default getLanguages;
