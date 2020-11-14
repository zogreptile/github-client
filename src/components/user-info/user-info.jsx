import {
  Image,
  Segment,
  Header,
  List,
  Divider,
} from 'semantic-ui-react';

const propTypes = {
  userInfo: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string,
    html_url: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
  }),
};

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
          Github page
        </a>

        <Divider />

        <List>
          {userInfo.company && (
            <List.Item 
              icon='users'
              content={userInfo.company}
            />
          )}

          {userInfo.location && (
            <List.Item 
              icon='map marker alternate'
              content={userInfo.location}
            />
          )}
        </List>
      </Segment>
    );
  }
};

UserInfo.propTypes = propTypes;

export default UserInfo;
