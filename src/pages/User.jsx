import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserInfo from '../components/UserInfo';
import Repos from '../components/Repos';
import RepoModal from '../components/RepoModal';
import ReposFilter from '../components/ReposFilter';
import ReposSort from '../components/ReposSort';
import actions from '../actions';
class User extends React.Component {
  componentDidMount() {
    const { match, getUserinfo, getRepos } = this.props;

    getUserinfo(match.params.username);
    getRepos(match.params.username);
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={4}>
          <UserInfo />
          <ReposFilter />
          <ReposSort />
        </Grid.Column>
        <Grid.Column width={12}>
          <Repos />
        </Grid.Column>
        <RepoModal />
      </Grid>
    );
  }
} 

export default withRouter(connect(null, actions)(User));
