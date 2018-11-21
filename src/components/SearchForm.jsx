import React from 'react';
import { connect } from "react-redux";
import { Form, Input, Button, Segment } from 'semantic-ui-react';
import { getUsers, updateQuery } from '../actions';

const mapStateToProps = state => ({
  query: state.query,
});

const mapDispatchToProps = {
  getUsers,
  updateQuery,
};

class SearchForm extends React.Component {
  handleChange = ({ target: { value } }) => {
    const { updateQuery } = this.props;
    updateQuery(value);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { getUsers, query } = this.props;
    return getUsers(query);
  }

  render() {
    const { query } = this.props;
    return (
      <Segment>
        <Form onSubmit={this.handleSubmit}>
          <Input
            value={query}
            onChange={this.handleChange}
            fluid
            label={<Button type='submit'>Submit</Button>}
            labelPosition='right'
          />
        </Form>
      </Segment>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
