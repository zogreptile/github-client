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
import getLanguages from '../utlis/getLanguages';

const mapStateToProps = state => ({
  repos: state.repos,
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

  handleLastUpdateDate = (e, { value }) => {
    const { lastUpdatedFilter } = this.props;
    lastUpdatedFilter(value);
  }

  handleTypeChange = (e, { value }) => {
    const { typeFilter } = this.props;
    typeFilter(value);
  }

  handleLanguageFilter = (e, { value }) => {
    const { languageFilter } = this.props;
    languageFilter(value);
  }

  handleFilterReset = () => {
    const { resetFilter } = this.props;
    resetFilter();
  }

  render() {
    const { repos, filter } = this.props;
    const languages = getLanguages(repos);

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
            <label>Updated after X date</label>
            <DateInput
              name="date"
              placeholder="Date"
              value={filter.lastUpdateDate}
              iconPosition="left"
              onChange={this.handleLastUpdateDate}
            />
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
          <Form.Field>
          <Form.Dropdown
            fluid
            selection
            label='Language'
            options={languages}
            value={filter.language}
            placeholder='Language'
            onChange={this.handleLanguageFilter}
          />
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
