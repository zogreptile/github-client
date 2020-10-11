import {
  Grid,
} from 'semantic-ui-react';
import UserCard from 'src/components/user-card';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string,
    username: PropTypes.string,
    avatar: PropTypes.string,
  })),
};

const defaultProps = {
  items: [],
};

const Users = ({ items }) => {
  if (!items.length) {
    return null;
  }

  const topMargin = {
    marginTop: '1rem'
  };

  return (
    <Grid
      doubling
      columns={5}
      style={topMargin}
    >
      {items.map(user => (
        <Grid.Column
          className='flex'
          key={user.id}
        >
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

Users.propTypes = propTypes;
Users.defaultProps = defaultProps;

export default Users;
