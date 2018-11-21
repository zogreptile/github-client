import React from 'react';
import { Container } from 'semantic-ui-react';
import SearchForm from './SearchForm';
import Users from './Users';

const App = () => (
  <Container text>
    <SearchForm />
    <Users />
  </Container>
);

export default App;
