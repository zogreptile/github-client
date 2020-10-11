import { connect } from "react-redux";
import {
  Grid,
} from 'semantic-ui-react';
import UserCard from 'src/components/user-card';

const mapStateToProps = state => ({
  users: state.users.items,
});

const Users = ({ users }) => {
  if (!users.length) {
    return null;
  }

  const topMargin = {
    marginTop: '1rem'
  };

  return (
    <Grid doubling columns={5} style={topMargin}>
      {users.map(user => (
        <Grid.Column className='flex' key={user.id}>
          <UserCard
            to={`/users/${user.login}`}
            username={user.login}
            avatar={user.avatar_url}
          />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default connect(mapStateToProps)(Users);
