import {
  Grid,
  Card,
} from 'semantic-ui-react';
import flow from "lodash.flow";
import moment from 'moment';

import MainLayout from 'src/layouts/main';

import UserInfo from 'src/components/user-info';
import RepoCard from 'src/components/repo-card';
import LoadMoreBtn from 'src/components/load-more-btn';
import RepoModal from 'src/components/repo-modal';
import ReposFilter from 'src/components/repos-filter';
import ReposSort from 'src/components/repos-sort';

import filterRepos from 'src/utlis/filter-repos';
import sortRepos from 'src/utlis/sort-repos';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  getUserinfo: PropTypes.func,
  getRepos: PropTypes.func,
  getRepoInfo: PropTypes.func,
  nextPageUrl: PropTypes.string,
  loadMoreRepos: PropTypes.func,
  repos: PropTypes.arrayOf(PropTypes.shape({
    owner: PropTypes.shape({
      login: PropTypes.string,
    }),
    name: PropTypes.string,
    description: PropTypes.string,
    updated_at: PropTypes.string,
    language: PropTypes.string,
    fork: PropTypes.bool,
    stargazers_count: PropTypes.number,
  })),
  filter: PropTypes.shape({}),
  sort: PropTypes.shape({}),
}

class UserPage extends React.Component {
  componentDidMount() {
    const { match, getUserinfo, getRepos } = this.props;

    getUserinfo(match.params.id);
    getRepos(match.params.id);
  }

  loadMoreRepos = () => {
    this.props.loadMoreRepos(this.props.nextPageUrl);
  }

  processRepos = (repos) => {
    const { filter, sort } = this.props;

    const repositories = repos.map((repo) => ({
      ...repo,
      lastUpdatedDate: moment(repo.updated_at).format('DD.MM.YYYY'),
    }));

    const processedRepos = flow(
      filterRepos(filter),
      sortRepos(sort),
    )(repositories);

    return processedRepos;
  }

  render() {
    const { nextPageUrl, loadMoreRepos } = this.props;

    return (
      <MainLayout>
        <Grid>
          <Grid.Column
            mobile={16}
            computer={4}
          >
            <UserInfo />
            <ReposFilter />
            <ReposSort />
          </Grid.Column>

          <Grid.Column
            mobile={16}
            computer={12}
          >
            {!this.props.repos.length
              ? <h1>No repositories</h1>
              : (
                <Card.Group itemsPerRow='3' doubling>
                  {this.processRepos(this.props.repos).map((repo) => (
                    <RepoCard
                      key={repo.id}
                      ownerUsername={repo.owner.login}
                      title={repo.name}
                      description={repo.description}
                      lastUpdatedDate={repo.lastUpdatedDate}
                      language={repo.language}
                      isFork={repo.fork}
                      stargazersCount={repo.stargazers_count}
                      getRepoInfo={this.props.getRepoInfo}
                    />
                  ))}
                </Card.Group>
              )
            }

            {!!this.props.nextPageUrl && (
              <LoadMoreBtn
                onClick={this.loadMoreRepos}
              />
            )}
          </Grid.Column>

          <RepoModal />
        </Grid>
      </MainLayout>
    );
  }
}

UserPage.propTypes = propTypes;

export default UserPage;
