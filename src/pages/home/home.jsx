import MainLayout from 'src/layouts/main';

import SearchForm from 'src/components/search-form';
import Users from 'src/components/users';
import LoadMoreBtn from 'src/components/load-more-btn';

const Home = ({ nextPageUrl, loadMoreUsers }) => (
  <MainLayout>
    <SearchForm />
    <Users />
    <LoadMoreBtn
      url={nextPageUrl}
      action={loadMoreUsers}
    />
  </MainLayout>
);

export default Home;
