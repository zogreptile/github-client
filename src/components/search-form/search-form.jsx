import {
  Header,
  Form,
  Input,
  Button,
} from 'semantic-ui-react';

const propTypes = {
  query: PropTypes.string,
  updateQuery: PropTypes.func,
  getUsers: PropTypes.func,
};

class SearchForm extends React.Component {
  handleChange = ({ target: { value } }) => {
    const { updateQuery } = this.props;
    updateQuery(value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { getUsers, query } = this.props;
    getUsers(query);
  }

  render() {
    const { query } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Header as="h1" content="Search github users" />

        <Input
          value={query}
          onChange={this.handleChange}
          fluid
          label={(
            <Button
              type='submit'
              disabled={!query}
            >
              Submit
            </Button>
          )}
          labelPosition='right'
        />
      </Form>
    );
  }
};

SearchForm.propTypes = propTypes;

export default SearchForm;
