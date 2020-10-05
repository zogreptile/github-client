import { Link } from 'react-router-dom';
import {
  Container,
  Menu,
  Icon,
  Dimmer,
  Loader,
} from 'semantic-ui-react';

const MainLayout = (props) => {
  return (
    <Container>
      <Menu pointing secondary>
        <Menu.Item name='home'>
          <Link to='/'>
            <Icon name='home' /> Home
          </Link>
        </Menu.Item>
      </Menu>

      {props.processing
        ? (
          <Dimmer active={props.processing} inverted>
            <Loader />
          </Dimmer>
        )
        : props.children
      }
    </Container>
  );
};

export default MainLayout;
