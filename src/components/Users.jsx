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

const mapStateToProps = state => ({
  users: state.users.items,
  isDataFetching: state.isDataFetching,
});

const UserCard = data => (
  <Card as={Link} to={`/${data.login}`}>
    <Image
      className='margin-a'
      src={data.avatar_url}
    />
    <Card.Content className='grow-0'>
      <Card.Header
        className='text-ellipsis'
        content={data.login}
      />
    </Card.Content>
  </Card>
);

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
            {UserCard(el)}
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
};

export default connect(mapStateToProps)(Users);
