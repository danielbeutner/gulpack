import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <div>{this.props.message}</div>
    );
  }
};

ReactDOM.render(
  <Hello message="It works! :-)" />,
  document.getElementById('app')
);
