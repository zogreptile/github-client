import { Link } from 'react-router-dom';
import {
  Card,
  Image,
} from 'semantic-ui-react';

const propTypes = {
  to: PropTypes.string,
  username: PropTypes.string,
  avatar: PropTypes.string,
};

const UserCard = (props) => (
  <Card
    as={Link}
    to={props.to}
  >
    <Image
      className='margin-a'
      src={props.avatar}
      width='132'
      height='132'
    />

    <Card.Content className='grow-0'>
      <Card.Header
        className='text-ellipsis'
        content={props.username}
      />
    </Card.Content>
  </Card>
);

UserCard.propTypes = propTypes;

export default UserCard;
