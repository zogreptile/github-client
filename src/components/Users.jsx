import React from 'react';
import { connect } from "react-redux";
import {
  Container,
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

const userCard = data => (
  <Link to={`/${data.login}`}>
    <Card>
      <Image src={data.avatar_url} />
      <Card.Content>
        <Card.Header>{data.login}</Card.Header>
      </Card.Content>
    </Card>
  </Link>
);

class Users extends React.Component {
  render() {
    const { users, isDataFetching } = this.props;
    if (!users.length) {
      return null;
    }
    return (
      <Container text>
        <Dimmer active={isDataFetching}>
          <Loader />
        </Dimmer>
        <Grid columns={3}>
          {users.map(el => (
            <Grid.Column key={el.id}>
              {userCard(el)}
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    );
  }
};

export default connect(mapStateToProps)(Users);
