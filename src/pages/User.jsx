import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserInfo from '../components/UserInfo';
import Repos from '../components/Repos';
import LoadMoreBtn from '../components/LoadMoreBtn';
import RepoModal from '../components/RepoModal';
import ReposFilter from '../components/ReposFilter';
import ReposSort from '../components/ReposSort';
import actions from '../actions';

const mapStateToProps = state => ({
  nextPageUrl: state.repos.pagination.next.url,
})
class User extends React.Component {
  componentDidMount() {
    const { match, getUserinfo, getRepos } = this.props;

    getUserinfo(match.params.username);
    getRepos(match.params.username);
  }

  render() {
    const { nextPageUrl, loadMoreRepos } = this.props;

    return (
      <Grid>
        <Grid.Column mobile={16} computer={4}>
          <UserInfo />
          <ReposFilter />
          <ReposSort />
        </Grid.Column>
        <Grid.Column mobile={16} computer={12}>
          <Repos />
          <LoadMoreBtn
            url={nextPageUrl}
            action={loadMoreRepos}
          />
        </Grid.Column>
        <RepoModal />
      </Grid>
    );
  }
} 

export default withRouter(connect(mapStateToProps, actions)(User));
