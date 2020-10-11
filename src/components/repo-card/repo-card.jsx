import {
  Grid,
  Card,
  Icon,
} from 'semantic-ui-react';
import LanguageIcon from 'src/components/language-icon';

const propTypes = {
  ownerUsername: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  lastUpdatedDate: PropTypes.string,
  language: PropTypes.string,
  isFork: PropTypes.bool,
  stargazersCount: PropTypes.number,
  getRepoInfo: PropTypes.func,
};

const RepoCard = (props) => {
  const getRepoData = () => {
    props.getRepoInfo(
      props.ownerUsername,
      props.title,
    );
  }

  return (
    <Card
      onClick={getRepoData}
    >
      <Card.Content>
        <Card.Header
          className='break-word'
          content={props.title}
        />

        <Card.Meta>
          {`Updated at: ${props.lastUpdatedDate}`}
        </Card.Meta>

        <Card.Description
          className='break-word'
          content={props.description}
        />
      </Card.Content>

      <Card.Content className='grow-0'>
        <Grid columns='2'>
          <Grid.Column>
            {props.isFork && <Icon name='fork' />}

            {
              props.stargazersCount > 0 && (
                <span>
                  <Icon name='star' aria-label='stargazers' />
                  {props.stargazersCount}
                </span>
              )
            }
          </Grid.Column>

          <Grid.Column textAlign='right'>
            {
              !!props.language && (
                <span>
                  <LanguageIcon language={props.language} />
                  {props.language}
                </span>
              )
            }
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  );
}

RepoCard.propTypes = propTypes;

export default RepoCard;
