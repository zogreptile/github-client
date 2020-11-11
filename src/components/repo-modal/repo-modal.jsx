import {
  Divider,
  Header,
  Modal,
  Button,
  Image,
  Grid,
} from 'semantic-ui-react';
import LanguageIcon from 'src/components/language-icon';

const propTypes = {
  isOpen: PropTypes.bool,
  contributors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    contributions: PropTypes.number,
    html_url: PropTypes.string,
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  })),
  general: PropTypes.shape({
    html_url: PropTypes.string,
    full_name: PropTypes.string,
    name: PropTypes.string,
    fork: PropTypes.bool,
  }),
  languages: PropTypes.shape({}), // { "Python": 7769 }
  pullRequests: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    html_url: PropTypes.string,
    title: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
    }),
  })),
  onClose: PropTypes.func.isRequired,
};

const defaultProps = {
  isOpen: false,
  contributors: [],
  general: {},
  languages: {},
  pullRequests: [],
};

const renderContributors = contributors => {
  if (!contributors.length) {
    return null
  }

  return (
    <>
      <Header as='h3'>Top 3 contributors:</Header>
      <Grid columns={3}>
        {contributors
          .sort((a, b) => Number(b.contributions) - Number(a.contributions))
          .slice(0, 3)
          .map((item) => (
            <Grid.Column key={item.id}>
              <a href={item.html_url} target='_blank'>
                <Image src={item.avatar_url} avatar />
                <span>{item.login}: {item.contributions}</span>
              </a>
            </Grid.Column>
          ))}
      </Grid>
    </>
  );
};

const renderLanguages = (data) => {
  const languages = Object.keys(data);

  const languageItems = languages
    .filter((lang) => data[lang] > 1024)
    .map((lang) => (
      <Grid.Column key={lang}>
        <LanguageIcon language={lang} />
        {lang}: {`${(data[lang] / 1024).toFixed(2)} kB`}
      </Grid.Column>
    ));

  if (!languageItems.length) {
    return null;
  }

  return (
    <>
      <Divider />
      <Header as='h3'>Languages:</Header>
      <Grid columns={3}>
        {languageItems}
      </Grid>
    </>
  );
};

const renderPullRequests = (data) => {
  if (!data.length) {
    return null;
  }  

  return (
    <>
      <Divider />
      <Header as='h3'>Top 5 PRs:</Header>
      <Grid columns={3}>
        {data
          .slice(0, 5)
          .map((pr) => (
            <Grid.Column key={pr.id}>
              <a
                href={pr.html_url}
                target='_blank'
              >
                <Image
                  src={pr.user.avatar_url}
                  avatar
                />
                <span>
                  {pr.title}
                </span>
              </a>
            </Grid.Column>
          ))}
      </Grid>
    </>
  )
};

class RepoModal extends React.Component {
  render() {
    const {
      isOpen,
      onClose,
      contributors,
      general,
      languages,
      pullRequests,
    } = this.props;

    return (
      <Modal
        open={isOpen}
        onClose={onClose}
      >
        <Modal.Content className='repo-modal__header'>
          <Header as='h1'>
            <a
              href={general.html_url}
              target='_blank'
            >
              {general.name}
            </a>

            {general.fork && (
              <Header.Subheader as='span'>
                <span>
                  {'forked from '}
                  <a
                    href={general.html_url}
                    target='_blank'
                  >
                    {general.full_name}
                  </a>
                </span>
              </Header.Subheader>
            )}
          </Header>
        </Modal.Content>

        <Modal.Content>
          {renderContributors(contributors)}
          {renderLanguages(languages)}
          {renderPullRequests(pullRequests)}
        </Modal.Content>

        <Modal.Actions>
          <Button
            color='green'
            onClick={onClose}
            content='Close'
          />
        </Modal.Actions>
      </Modal>
    );
  }
};

RepoModal.propTypes = propTypes;
RepoModal.defaultProps = defaultProps;

export default RepoModal;
