import React from 'react';
import {
  Container,
  Loader,
  Dimmer,
} from 'semantic-ui-react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserInfo from '../components/UserInfo';
import * as actions from '../actions';

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  isDataFetching: state.isDataFetching,
});

class User extends React.Component {
  componentDidMount() {
    const { match, getUserinfo } = this.props;
    getUserinfo(match.params.username);
  }

  render() {
    const { isDataFetching } = this.props;
    return (
      <>
        <Dimmer active={isDataFetching} inverted page>
          <Loader />
        </Dimmer>
        <UserInfo />
        <Container text>
        </Container>
      </>
    );
  }
} 

export default withRouter(connect(null, actions)(User));
