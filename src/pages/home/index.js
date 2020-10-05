import { connect } from 'react-redux';
import Home from './home';

import { loadMoreUsers } from 'src/actions/load-more-users';
import { updateQuery } from 'src/actions/query';
import { getUsers } from 'src/actions/users';

const mapStateToProps = state => ({
  isUsersFetching: state.users.isFetching,
  nextPageUrl: state.users.pagination.next.url,
  query: state.query,
});

const mapDispatchToProps = {
  loadMoreUsers,
  updateQuery,
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
