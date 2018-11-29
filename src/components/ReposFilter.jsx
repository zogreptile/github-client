import React from 'react';
import {
  Form,
  Checkbox,
  Radio
} from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import { connect } from "react-redux";
import actions from '../actions';

const mapStateToProps = state => ({
  
});

class ReposFilter extends React.Component {
  render() {
    const { isDataFetching, repos } = this.props;
    return (
      <>
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
            <input />
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
      </>
    );
  }
} 

export default connect(mapStateToProps, actions)(ReposFilter);
