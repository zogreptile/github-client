import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

const Layout = (props) => {
  return (
    <Container>
      <Menu pointing secondary>
        <Menu.Item name='home'>
          <Link to='/'>Home</Link>
        </Menu.Item>
      </Menu>
      {props.children}
    </Container>
  );
};

export default Layout;
