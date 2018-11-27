import React from 'react';
import { connect } from "react-redux";
import {
  Sidebar,
  Image,
  Segment,
  Header,
  List,
  Divider,
} from 'semantic-ui-react';
import ReposFilter from '../components/ReposFilter';

const mapStateToProps = state => ({
  userInfo: state.userInfo,
});

// const mapDispatchToProps = {
//   getUsers,
//   updateQuery,
// };

class UserInfo extends React.Component {
  render() {
    const { userInfo } = this.props;
    return (
      <Sidebar visible={true}>
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
          <Divider />

          <ReposFilter />
        </Segment>
      </Sidebar>
    );
  }
};

export default connect(mapStateToProps)(UserInfo);
