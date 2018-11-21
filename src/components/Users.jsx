import React from 'react';
import { connect } from "react-redux";
import { Grid, Card, Image } from 'semantic-ui-react';
// import { } from '../actions';

const mapStateToProps = state => ({
  users: state.users,
});

// const mapDispatchToProps = {
//   getUsers,
//   updateQuery,
// };

const userCard = data => (
  <Card href={data.html_url}>
    <Image src={data.avatar_url} />
    <Card.Content>
      <Card.Header>{data.login}</Card.Header>
    </Card.Content>
  </Card>
);

class Users extends React.Component {
  render() {
    const { users } = this.props;
    if (!users.length) {
      return null;
    }
    return (
      <Grid columns={3}>
        {users.map(el => (
          <Grid.Column key={el.id}>
            {userCard(el)}
          </Grid.Column>
        ))}
      </Grid>
    );
  }
};

export default connect(mapStateToProps)(Users);
