import React from 'react';
import { connect } from "react-redux";
import {
  Button,
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
  handleIssuesFilter = (e, data) => {
    const { issuesFilter } = this.props;
    issuesFilter(data.checked);
  }

  handleTopicsFilter = (e, data) => {
    const { topicsFilter } = this.props;
    topicsFilter(data.checked);
  }

  handleStarredChange = ({ target: { value } }) => {
    const { starredFilter } = this.props;
    starredFilter(value);
  }

  handleTypeChange = (e, { value }) => {
    const { typeFilter } = this.props;
    typeFilter(value);
  }

  handleFilterReset = () => {
    const { resetFilter } = this.props;
    resetFilter();
  }

  render() {
    const { filter } = this.props;

    return (
      <Segment>
        <h2>Filter</h2>
        <Form>
          <Form.Field>
            <Checkbox
              checked={filter.hasOpenIssues}
              label='Has open issues'
              onChange={this.handleIssuesFilter}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              checked={filter.hasTopics}
              label='Has topics'
              onChange={this.handleTopicsFilter}
            />
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

          {/* TYPES OF REPOS */}
          <Form.Field>
            <label>Type</label>
            <Form.Field>
              <Radio
                label='All'
                name='typeFilter'
                value='all'
                checked={filter.type === 'all'}
                onChange={this.handleTypeChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Forks'
                name='typeFilter'
                value='forks'
                checked={filter.type === 'forks'}
                onChange={this.handleTypeChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Sources'
                name='typeFilter'
                value='sources'
                checked={filter.type === 'sources'}
                onChange={this.handleTypeChange}
              />
            </Form.Field>
          </Form.Field>
          <Button
            content='Reset filters'
            fluid={true}
            onClick={this.handleFilterReset}
          />
        </Form>
      </Segment>
    );
  }
} 

export default connect(mapStateToProps, actions)(ReposFilter);
