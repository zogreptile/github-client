import React from 'react';
import {
  Container,
  Loader,
  Dimmer,
} from 'semantic-ui-react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserInfo from '../components/UserInfo';
import Repos from '../components/Repos';
import actions from '../actions';
class User extends React.Component {
  componentDidMount() {
    const { match, getUserinfo, getRepos } = this.props;
    getUserinfo(match.params.username);
    getRepos(match.params.username);
  }

  render() {
    const { isDataFetching } = this.props;
    return (
      <>
        <Dimmer active={isDataFetching} inverted page>
          <Loader />
        </Dimmer>
        <UserInfo />
        <div style={{marginLeft: '275px'}}>
          <Repos />
        </div>
      </>
    );
  }
} 

export default withRouter(connect(null, actions)(User));
