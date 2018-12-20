import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserInfo from '../components/UserInfo';
import Repos from '../components/Repos';
import ReposFilter from '../components/ReposFilter';
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
        </Grid.Column>
        <Grid.Column width={12}>
          <Repos />
        </Grid.Column>
      </Grid>
    );
  }
} 

export default withRouter(connect(null, actions)(User));
