import React from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserInfo from '../components/UserInfo';
import * as actions from '../actions';

const mapStateToProps = state => ({
  userInfo: state.userInfo,
});

class User extends React.Component {
  componentDidMount() {
    const { match, getUserinfo } = this.props;
    getUserinfo(match.params.username);
  }

  render() {
    return (
      <>
        <UserInfo />
        <Container text>
        </Container>
      </>
    );
  }
} 

export default withRouter(connect(null, actions)(User));
