import React from 'react';
import { connect } from 'react-redux';
import { loadMoreUsers } from '../actions/loadMoreUsers';
import SearchForm from '../components/SearchForm';
import Users from '../components/Users';
import LoadMoreBtn from '../components/LoadMoreBtn';

const mapStateToProps = state => ({
  nextPageUrl: state.users.pagination.next.url,
});

const mapDispatchToProps = {
  loadMoreUsers,
};

const Index = ({ nextPageUrl, loadMoreUsers }) => (
  <>
    <SearchForm />
    <Users />
    <LoadMoreBtn
      url={nextPageUrl}
      action={loadMoreUsers}
    />
  </>
);

export default connect(mapStateToProps, mapDispatchToProps)(Index);
