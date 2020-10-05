import { Link } from 'react-router-dom';
import {
  Container,
  Menu,
  Icon,
  Dimmer,
  Loader,
} from 'semantic-ui-react';

const propTypes = {
  processing: PropTypes.bool,
  children: PropTypes.node,
}

const defaultProps = {
  processing: false,
}

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

MainLayout.propTypes = propTypes;
MainLayout.defaultProps = defaultProps;

export default MainLayout;
