import { Button } from 'semantic-ui-react';

const propTypes = {
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: () => {},
};

const LoadMoreBtn = (props) => (
  <Button
    className='load-more-btn'
    fluid
    color='blue'
    onClick={props.onClick}
  >
    Load more
  </Button>
)

LoadMoreBtn.propTypes = propTypes;
LoadMoreBtn.defaultProps = defaultProps;

export default LoadMoreBtn;
