import React from 'react';
import { connect } from "react-redux";
import {
  Grid,
  Card,
  Image,
  Loader,
  Dimmer,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';

const mapStateToProps = state => ({
  users: state.users.items,
  isDataFetching: state.isDataFetching,
});

const Users = ({ users, isDataFetching }) => {
  if (!users.length) {
    return null;
  }

  const topMargin = {
    marginTop: '1rem'
  };

  return (
    <>
      <Dimmer active={isDataFetching} inverted>
        <Loader />
      </Dimmer>
      <Grid doubling columns={5} style={topMargin}>
        {users.map(el => (
          <Grid.Column className='flex' key={el.id}>
            <UserCard
              data={el}
              as={Link}
              to={`/${el.login}`}
            />
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
};

export default connect(mapStateToProps)(Users);
