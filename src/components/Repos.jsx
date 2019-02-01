import React from 'react';
import {
  Loader,
  Dimmer,
  Card,
} from 'semantic-ui-react';
import { connect } from "react-redux";
import RepoCard from '../components/RepoCard';
import { getRepoInfo } from '../actions/repoInfo';
import filterRepos from '../utlis/filterRepos';
import sortRepos from '../utlis/sortRepos';

const mapStateToProps = state => ({
  isDataFetching: state.isDataFetching,
  repos: state.repos.items,
  filter: state.filter,
  sort: state.sort,
});

const mapDisptachToProps = {
  getRepoInfo,
};
class Repos extends React.Component {
  handleClick = (username, reponame) => () => {
    const { getRepoInfo } = this.props;
    getRepoInfo(username, reponame);
  }

  renderItems = () => {
    const { filter, sort, repos } = this.props;
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
    const { isDataFetching } = this.props;
    return (
      <>
        <Dimmer active={isDataFetching} inverted>
          <Loader />
        </Dimmer>
        <Card.Group itemsPerRow='3' doubling>
          {this.renderItems()}
        </Card.Group>
      </>
    );
  }
};

export default connect(mapStateToProps, mapDisptachToProps)(Repos);
