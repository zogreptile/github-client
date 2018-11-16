import React from 'react';

export default class App extends React.Component {
  state = { query: '' }

  render() {
    return (
      <>
        <input type="text" />
        <button type="submit">Find</button>
      </>
    );
  }
};
