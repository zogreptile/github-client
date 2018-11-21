import React from 'react';
import { connect } from "react-redux";
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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={this.handleChange}
        />
        <button type="submit">Find</button>
      </form>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
