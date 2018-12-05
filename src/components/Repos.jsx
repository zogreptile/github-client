import React from 'react';
import {
  Grid,
  Divider,
  Loader,
  Dimmer,
  Card,
  Icon,
} from 'semantic-ui-react';
import { connect } from "react-redux";
import actions from '../actions';

const mapStateToProps = state => ({
  isDataFetching: state.isDataFetching,
  repos: state.repos,
  filter: state.filter,
});

const filterStarred = (coll, stars) =>
  coll.filter(el => el.stargazers_count >= stars)

class Repos extends React.Component {
  formatUpdatedDate(dateStr) {
    const parsedDate = new Date(dateStr);
    const day = parsedDate.getDate();
    const month = parsedDate.getMonth() + 1;
    const year = parsedDate.getFullYear();
    return `${day}.${month}.${year}`;
  }

  renderCards(repos) {
    if (!repos.length) {
      return <h1>This user hasn't public repositories.</h1>
    }
    const { filter: { starred } } = this.props;
    return filterStarred(repos, starred).map(el => 
      <Card key={el.id}>
        <Card.Content>
          <Card.Header>{el.name}</Card.Header>
          <Card.Meta>Updated at: {this.formatUpdatedDate(el.updated_at)}</Card.Meta>
          <Card.Description>{el.description}</Card.Description>
          <Divider />
          <Grid columns='2'>
            <Grid.Column>
              {el.fork ? <Icon name='fork' /> : null}
              {el.stargazers_count ? <span><Icon name='star' aria-label='stargazers' /> {el.stargazers_count}</span> : null}
            </Grid.Column>
            <Grid.Column textAlign='right'>
              {el.language}
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    )
  }

  render() {
    const { isDataFetching, repos } = this.props;
    return (
      <>
        <Dimmer active={isDataFetching} inverted page>
          <Loader />
        </Dimmer>
        <Card.Group>
          {this.renderCards(repos)}
        </Card.Group>
      </>
    );
  }
} 

export default connect(mapStateToProps, actions)(Repos);
