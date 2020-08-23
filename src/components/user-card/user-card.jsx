import React from 'react';
import {
  Card,
  Image,
} from 'semantic-ui-react';

const UserCard = ({ data, ...props }) => (
  <Card {...props}>
    <Image
      className='margin-a'
      src={data.avatar_url}
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
