import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import actions from '../actions';

class LoadMoreBtn extends React.Component {
  handleClick = () => {
    const { url, loadMore } = this.props;
    loadMore(url);
  }

  render() {
    const { url } = this.props;

    return url ?
      <Button
        fluid
        color='blue'
        onClick={this.handleClick}
      >
        Load more
      </Button> :
      null;
  }
}

export default connect(null, actions)(LoadMoreBtn);
