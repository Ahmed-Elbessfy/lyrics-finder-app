import React, { Component } from 'react';

const Context = React.createContext();
class Provider extends Component {
  state = {
    track_list: [
      { track: { track_name: 'ABC' } },
      { track: { track_name: 'ddfg' } },
    ],
    heading: 'Top 10 Tracks'
  }
  render() {
    return (
      <Context.Provider value={ this.state }>
        { this.props.children }
      </Context.Provider>
    );
  }
};

const Consumer = Context.Consumer

export { Provider, Consumer }