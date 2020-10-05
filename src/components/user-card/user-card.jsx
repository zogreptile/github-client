import {
  Card,
  Image,
} from 'semantic-ui-react';

const UserCard = ({ data, ...props }) => (
  <Card {...props}>
    <Image
      className='margin-a'
      src={data.avatar_url}
      width='132'
      height='132'
    />
    <Card.Content className='grow-0'>
      <Card.Header
        className='text-ellipsis'
        content={data.login}
      />
    </Card.Content>
  </Card>
);

export default UserCard;
