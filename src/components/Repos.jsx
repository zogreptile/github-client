import React from 'react';
import {
  Loader,
  Dimmer,
  Card,
} from 'semantic-ui-react';
import { connect } from "react-redux";
import RepoCard from '../components/RepoCard';
import actions from '../actions';
import filterRepos from '../utlis/filterRepos';
import sortRepos from '../utlis/sortRepos';

const mapStateToProps = state => ({
  isDataFetching: state.isDataFetching,
  repos: state.repos.items,
  repoInfo: state.repoInfo,
  filter: state.filter,
  sort: state.sort,
});
class Repos extends React.Component {
  handleClick = (username, reponame) => () => {
    const { getRepoInfo } = this.props;
    getRepoInfo(username, reponame);
  }

  renderItems = (repos) => {
    const { filter, sort } = this.props;
    const processedRepos = sortRepos(
      filterRepos(repos, filter),
      sort,
    );

    if (!processedRepos.length) {
      return <h1>Nothing found</h1>
    }

    return processedRepos.map(el =>
      <RepoCard
        key={el.id}
        data={el}
      />
    );
  }

  render() {
    const { isDataFetching, repos } = this.props;
    return (
      <>
        <Dimmer active={isDataFetching} inverted>
          <Loader />
        </Dimmer>
        <Card.Group itemsPerRow='3' doubling>
          {this.renderItems(repos)}
        </Card.Group>
      </>
    );
  }
};

export default connect(mapStateToProps, actions)(Repos);
