import React from 'react';
import {
  Grid,
  Card,
  Icon,
} from 'semantic-ui-react';
import { connect } from "react-redux";
import moment from 'moment';
import LanguageIcon from '../components/LanguageIcon';
import actions from '../actions';

class RepoCard extends React.Component {
  handleClick = () => {
    const { getRepoInfo, data } = this.props;
    getRepoInfo(data.owner.login, data.name);
  }

  render() {
    const { data } = this.props;
    const updateDate = moment(data.updated_at).format('DD.MM.YYYY');

    return (
      <Card onClick={this.handleClick}>
        <Card.Content>
          <Card.Header
            className='break-word'
            content={data.name}
          />
          <Card.Meta>Updated at: {updateDate}</Card.Meta>
          <Card.Description
            className='break-word'
            content={data.description}
          />
        </Card.Content>
        <Card.Content className='grow-0'>
          <Grid columns='2'>
            <Grid.Column>
              {data.fork && <Icon name='fork' />}
              {
                data.stargazers_count > 0 &&
                <span><Icon name='star' aria-label='stargazers' /> {data.stargazers_count}</span>
              }
            </Grid.Column>
            <Grid.Column textAlign='right'>
              {
                data.language &&
                <span>
                  <LanguageIcon language={data.language} />
                  {data.language}
                </span>
              }
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
};

export default connect(null, actions)(RepoCard);
