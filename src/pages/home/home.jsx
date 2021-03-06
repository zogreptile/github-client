import MainLayout from 'src/layouts/main';

import SearchForm from 'src/components/search-form';
import Users from 'src/components/users';
import LoadMoreBtn from 'src/components/load-more-btn';

const propTypes = {
  isUsersFetching: PropTypes.bool,
  query: PropTypes.string,
  nextPageUrl: PropTypes.string,
  loadMoreUsers: PropTypes.func,
  updateQuery: PropTypes.func,
  getUsers: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string,
    username: PropTypes.string,
    avatar: PropTypes.string,
  })),
};

const HomePage = (props) => {
  const loadMoreUsers = () => {
    props.loadMoreUsers(props.nextPageUrl);
  };

  return (
    <MainLayout
      processing={props.isUsersFetching}
    >
      <SearchForm
        query={props.query}
        updateQuery={props.updateQuery}
        getUsers={props.getUsers}
      />

      <Users
        items={props.users}
      />

      {!!props.nextPageUrl && (
        <LoadMoreBtn
          onClick={loadMoreUsers}
        />
      )}
    </MainLayout>
  );
}

HomePage.propTypes = propTypes;

export default HomePage;
