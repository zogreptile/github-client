import { connect } from "react-redux";
import {
  Header,
  Form,
  Input,
  Button,
} from 'semantic-ui-react';
import { updateQuery } from 'src/actions/query';
import { getUsers } from 'src/actions/users';

const mapStateToProps = state => ({
  query: state.query,
});

const mapDispatchToProps = {
  updateQuery,
  getUsers,
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
      <>
        <Header as="h1" content="Search github users" />
        <Form onSubmit={this.handleSubmit}>
          <Input
            value={query}
            onChange={this.handleChange}
            fluid
            label={<Button type='submit'>Submit</Button>}
            labelPosition='right'
          />
        </Form>
      </>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
