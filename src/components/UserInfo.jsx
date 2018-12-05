import React from 'react';
import { connect } from "react-redux";
import {
  Image,
  Segment,
  Header,
  List,
  Divider,
} from 'semantic-ui-react';

const mapStateToProps = state => ({
  userInfo: state.userInfo,
});
class UserInfo extends React.Component {
  render() {
    const { userInfo } = this.props;
    return (
      <Segment>
        <Image
          src={userInfo.avatar_url}
          size='tiny'
          bordered
        />
        <Header
          size='large'
          content={userInfo.name}
          subheader={userInfo.login}
        />
        <Divider />
        <a
          href={userInfo.html_url}
          target='_blank'
        >
          View on github
        </a>
        <Divider />
        <List>
          {userInfo.company
            ? <List.Item 
              icon='users'
              content={userInfo.company}
            />
            : null
          }
          {userInfo.location
            ? <List.Item 
              icon='map marker alternate'
              content={userInfo.location}
            />
            : null
          }
        </List>
      </Segment>
    );
  }
};

export default connect(mapStateToProps)(UserInfo);
