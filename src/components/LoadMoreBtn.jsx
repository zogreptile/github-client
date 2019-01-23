import React from 'react';
import { Button } from 'semantic-ui-react';
class LoadMoreBtn extends React.Component {
  handleClick = () => {
    const { url, action } = this.props;
    action(url);
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

export default LoadMoreBtn;
