import {
  Grid,
  Card,
  Icon,
} from 'semantic-ui-react';
import { connect } from "react-redux";
import moment from 'moment';
import LanguageIcon from 'src/components/language-icon';
import { getRepoInfo } from 'src/actions/repo-info';

const mapDispatchToProps = {
  getRepoInfo,
};

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

export default connect(null, mapDispatchToProps)(RepoCard);
