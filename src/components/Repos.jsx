import React from 'react';
import {
  Container,
  Loader,
  Dimmer,
  Card,
} from 'semantic-ui-react';
import { connect } from "react-redux";
import * as actions from '../actions';

const mapStateToProps = state => ({
  isDataFetching: state.isDataFetching,
  repos: state.repos,
});

class Repos extends React.Component {
  render() {
    const { isDataFetching, repos } = this.props;
    return (
      <>
        <Dimmer active={isDataFetching} inverted page>
          <Loader />
        </Dimmer>
        <Card.Group>
          {repos.length 
            ? repos.map(el => 
                <Card
                  header={el.name}
                  description={el.description}
                />
              )
            : 'This user hasn\'t public repositories.'
          }
        </Card.Group>
      </>
    );
  }
} 

export default connect(mapStateToProps, actions)(Repos);
