import { Grid } from 'semantic-ui-react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import MainLayout from 'src/layouts/main';

import UserInfo from 'src/components/user-info';
import Repos from 'src/components/repos';
import LoadMoreBtn from 'src/components/load-more-btn';
import RepoModal from 'src/components/repo-modal';
import ReposFilter from 'src/components/repos-filter';
import ReposSort from 'src/components/repos-sort';

import { getUserinfo } from 'src/actions/user-info';
import { getRepos } from 'src/actions/repos';
import { loadMoreRepos } from 'src/actions/load-more-repos';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  getUserinfo: PropTypes.func,
  getRepos: PropTypes.func,
  nextPageUrl: PropTypes.string,
  loadMoreRepos: PropTypes.func,
}

const mapStateToProps = state => ({
  nextPageUrl: state.repos.pagination.next.url,
});

const mapDispatchToProps = {
  getUserinfo,
  getRepos,
  loadMoreRepos,
};

class UserPage extends React.Component {
  componentDidMount() {
    const { match, getUserinfo, getRepos } = this.props;

    getUserinfo(match.params.id);
    getRepos(match.params.id);
  }

  render() {
    const { nextPageUrl, loadMoreRepos } = this.props;

    return (
      <MainLayout>
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
      </MainLayout>
    );
  }
}

UserPage.propTypes = propTypes;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPage));
