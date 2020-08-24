import { Icon } from 'semantic-ui-react';
import languageColors from 'github-language-colors';

const LanguageIcon = ({ language, ...props }) => {
  const iconColor = {
    color: languageColors[language],
  };

  return <Icon
    {...props}
    name='circle'
    style={iconColor}
  />
};

export default LanguageIcon;
