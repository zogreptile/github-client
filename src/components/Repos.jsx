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
import moment from 'moment';
import actions from '../actions';
import applyFilters from '../utlis/applyFilters';
import applySorting from '../utlis/applySorting';

const mapStateToProps = state => ({
  isDataFetching: state.isDataFetching,
  repos: state.repos,
  filter: state.filter,
  sort: state.sort,
});
class Repos extends React.Component {
  renderCards(repos) {
    const { filter, sort } = this.props;
    const filteredRepos = applyFilters(repos, filter);

    if (!filteredRepos.length) {
      return <h1>Nothing found</h1>
    }

    const sortedRepos = applySorting(filteredRepos, sort);

    return sortedRepos.map(el => 
      <Card key={el.id}>
        <Card.Content>
          <Card.Header>{el.name}</Card.Header>
          <Card.Meta>Updated at: {moment(el.updated_at).format('DD.MM.YYYY')}</Card.Meta>
          <Card.Description>{el.description}</Card.Description>
          <Divider />
          <Grid columns='2'>
            <Grid.Column>
              {el.fork && <Icon name='fork' />}
              {el.stargazers_count && <span><Icon name='star' aria-label='stargazers' /> {el.stargazers_count}</span>}
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
        <Dimmer active={isDataFetching} inverted>
          <Loader />
        </Dimmer>
        <Card.Group itemsPerRow='3'>
          {this.renderCards(repos)}
        </Card.Group>
      </>
    );
  }
} 

export default connect(mapStateToProps, actions)(Repos);
