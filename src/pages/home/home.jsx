import React from 'react';
import SearchForm from 'src/components/search-form';
import Users from 'src/components/users';
import LoadMoreBtn from 'src/components/load-more-btn';

const Home = ({ nextPageUrl, loadMoreUsers }) => (
  <>
    <SearchForm />
    <Users />
    <LoadMoreBtn
      url={nextPageUrl}
      action={loadMoreUsers}
    />
  </>
);

export default Home;
