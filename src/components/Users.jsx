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
  users: state.users,
  isDataFetching: state.isDataFetching,
});

const UserCard = data => (
  <Link to={`/${data.login}`}>
    <Card>
      <Image src={data.avatar_url} />
      <Card.Content>
        <Card.Header>{data.login}</Card.Header>
      </Card.Content>
    </Card>
  </Link>
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
          <Grid.Column key={el.id}>
            {UserCard(el)}
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
};

export default connect(mapStateToProps)(Users);
