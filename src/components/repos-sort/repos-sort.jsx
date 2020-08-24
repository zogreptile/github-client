import { connect } from "react-redux";
import {
  Button,
  Form,
  Segment,
} from 'semantic-ui-react';
import {
  setSortType,
  setSortDirection,
  resetSort,
} from 'src/actions/sort';

const mapStateToProps = state => ({
  sort: state.sort,
});

const mapDispatchToProps = {
  setSortType,
  setSortDirection,
  resetSort,
};

const sortOptions = [
  { value: 'none', text: 'None' },
  { value: 'name', text: 'Name' },
  { value: 'stars', text: 'Stars' },
  { value: 'openedIssues', text: 'Opened issues' },
  { value: 'updatedDate', text: 'Last updated date' },
];

class ReposSort extends React.Component {
  handleSortType = (e, { value }) => {
    const { setSortType } = this.props;
    setSortType(value);
  }

  handleSortDirection = (e, { value }) => {
    const { setSortDirection } = this.props;
    setSortDirection(value);
  }

  handleSortReset = () => {
    const { resetSort } = this.props;
    resetSort();
  }

  render() {
    const { sort } = this.props;

    return (
      <Segment>
        <h2>Sorting</h2>
        <Form>
          <Form.Field>
            <label>Direction</label>
            <Form.Radio
              label='Desc'
              value='desc'
              checked={sort.direction === 'desc'}
              onChange={this.handleSortDirection}
            />
            <Form.Radio
              label='Asc'
              value='asc'
              checked={sort.direction === 'asc'}
              onChange={this.handleSortDirection}
            />
          </Form.Field>
          <Form.Dropdown
            fluid
            selection
            label='Sort by'
            options={sortOptions}
            value={sort.type}
            placeholder='Sort'
            onChange={this.handleSortType}
          />
          <Button
            content='Reset sorting'
            fluid={true}
            color='red'
            onClick={this.handleSortReset}
          />
        </Form>
      </Segment>
    );
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(ReposSort);
