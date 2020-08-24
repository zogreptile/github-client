import { Grid } from 'semantic-ui-react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserInfo from 'src/components/user-info';
import Repos from 'src/components/repos';
import LoadMoreBtn from 'src/components/load-more-btn';
import RepoModal from 'src/components/repo-modal';
import ReposFilter from 'src/components/repos-filter';
import ReposSort from 'src/components/repos-sort';

import { getUserinfo } from 'src/actions/user-info';
import { getRepos } from 'src/actions/repos';
import { loadMoreRepos } from 'src/actions/load-more-repos';

const mapStateToProps = state => ({
  nextPageUrl: state.repos.pagination.next.url,
});

const mapDispatchToProps = {
  getUserinfo,
  getRepos,
  loadMoreRepos,
};
class User extends React.Component {
  componentDidMount() {
    const { match, getUserinfo, getRepos } = this.props;

    getUserinfo(match.params.username);
    getRepos(match.params.username);
  }

  render() {
    const { nextPageUrl, loadMoreRepos } = this.props;

    return (
      <Grid>
        <Grid.Column mobile={16} computer={4}>
          <UserInfo />
          <ReposFilter />
          <ReposSort />
        </Grid.Column>
        <Grid.Column mobile={16} computer={12}>
          <Repos />
          <LoadMoreBtn
            url={nextPageUrl}
            action={loadMoreRepos}
          />
        </Grid.Column>
        <RepoModal />
      </Grid>
    );
  }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
