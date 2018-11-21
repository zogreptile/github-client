import React from 'react';
import { Container } from 'semantic-ui-react';
import SearchForm from '../components/SearchForm';
import Users from '../components/Users';

const Index = () => (
  <Container text>
    <SearchForm />
    <Users />
  </Container>
);

export default Index;
