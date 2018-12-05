import React from 'react';
import { connect } from "react-redux";
import {
  Form,
  Checkbox,
  Radio,
  Segment,
} from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import actions from '../actions';

const mapStateToProps = state => ({
  filter: state.filter,
});

class ReposFilter extends React.Component {
  handleStarredChange = ({ target: { value } }) => {
    const { starredFilter } = this.props;
    starredFilter(value);
  }

  render() {
    const { filter } = this.props;
    return (
      <Segment>
        <h2>Filter</h2>
        <Form>
          <Form.Field>
            <Checkbox label='Has open issues' />
          </Form.Field>
          <Form.Field>
            <Checkbox label='Has topics' />
          </Form.Field>
          <Form.Field>
            <label>Starred >= X times</label>
            <input
              value={filter.starred}
              onChange={this.handleStarredChange}
            />
          </Form.Field>
          <Form.Field>
            <label>updated after X date</label>
            <DateInput />
          </Form.Field>

          <Form.Group inline>
            <label>Type</label>
            <Form.Radio
              label='All'
              value='all'
            />
            <Form.Radio
              label='Forks'
              value='forks'
            />
            <Form.Radio
              label='Sources'
              value='sources'
            />
          </Form.Group>
        </Form>
      </Segment>
    );
  }
} 

export default connect(mapStateToProps, actions)(ReposFilter);
