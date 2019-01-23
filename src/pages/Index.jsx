import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import SearchForm from '../components/SearchForm';
import Users from '../components/Users';
import LoadMoreBtn from '../components/LoadMoreBtn';

const mapStateToProps = state => ({
  nextPageUrl: state.users.pagination.next.url,
});

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

export default connect(mapStateToProps, actions)(Index);
