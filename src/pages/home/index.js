import { connect } from 'react-redux';
import Home from './home';

import { loadMoreUsers } from 'src/actions/load-more-users';

const mapStateToProps = state => ({
  nextPageUrl: state.users.pagination.next.url,
});

const mapDispatchToProps = {
  loadMoreUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
