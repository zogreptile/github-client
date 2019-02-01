import React from 'react';
import {
  Divider,
  Header,
  Modal,
  Button,
  Image,
  Grid,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import LanguageIcon from '../components/LanguageIcon';
import {
  openRepoModal,
  closeRepoModal,
} from '../actions/repoModal';

const mapStateToProps = state => ({
  repoInfo: state.repoInfo,
  repoModal: state.repoModal,
});

const mapDispatchToProps = {
  openRepoModal,
  closeRepoModal,
};

const renderContributors = data => {
  if (!data.length) {
    return null
  }

  const contributors = [...data];

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
        {lang}: {(data[lang] / 1024).toFixed(2)} kB
      </Grid.Column>
    ));

  return languageItems.length ?
    <>
      <Divider />
      <Header as='h3'>Languages:</Header>
      <Grid columns={3}>
        {languageItems}
      </Grid>
    </> :
    null;
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
              <a href={pr.html_url} target='_blank'>
                <Image src={pr.user.avatar_url} avatar />
                <span>{pr.title}</span>
              </a>
            </Grid.Column>
          ))}
      </Grid>
    </>
  )
};

class RepoModal extends React.Component {
  handleOpen = () => {
    const { openRepoModal } = this.props;
    openRepoModal();
  }

  handleClose = () => {
    const { closeRepoModal } = this.props;
    closeRepoModal();
  }

  render() {
    const { repoInfo, repoModal } = this.props;
    return (
      Object.keys(repoInfo).length ?
      <Modal
        open={repoModal.isOpen}
        onClose={this.handleClose}
      >
        <Modal.Content style={{backgroundColor: '#f7f7f7'}}>
          <Header as='h1'>
            <a href={repoInfo.general.html_url} target='_blank'>{repoInfo.general.name}</a>
            {
              repoInfo.general.fork &&
              <Header.Subheader as='span'>
                <span>
                  {'forked from '}
                  <a href={repoInfo.general.parent.html_url} target='_blank'>{repoInfo.general.parent.full_name}</a>
                </span>
              </Header.Subheader>
            }
          </Header>
        </Modal.Content>
        <Modal.Content>
          {renderContributors(repoInfo.contributors)}
          {renderLanguages(repoInfo.languages)}
          {renderPullRequests(repoInfo.pullRequests)}
        </Modal.Content>
        <Modal.Actions>
          <Button
            color='green'
            onClick={this.handleClose}
            content='Close'
          />
        </Modal.Actions>
      </Modal> :
      null
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoModal);
