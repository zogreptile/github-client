import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Menu,
  Icon,
} from 'semantic-ui-react';

const Main = (props) => {
  return (
    <Container>
      <Menu pointing secondary>
        <Menu.Item name='home'>
          <Link to='/'>
            <Icon name='home' /> Home
          </Link>
        </Menu.Item>
      </Menu>
      {props.children}
    </Container>
  );
};

export default Main;
