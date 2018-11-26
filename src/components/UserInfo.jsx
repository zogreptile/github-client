import React from 'react';
import { connect } from "react-redux";
import { Menu } from 'semantic-ui-react';
import {  } from '../actions';

// const mapStateToProps = state => ({
//   query: state.query,
// });

// const mapDispatchToProps = {
//   getUsers,
//   updateQuery,
// };

class UserInfo extends React.Component {
  render() {
    return (
      <Menu vertical inverted fixed='left'>
        <Menu.Item>
          <div>Test</div>
        </Menu.Item>
      </Menu>
    );
  }
};

export default UserInfo;
// export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
