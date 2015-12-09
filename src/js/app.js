import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.message = 'It works! :-)';
  }
  render() {
    return (
      <div>{this.message}</div>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);
