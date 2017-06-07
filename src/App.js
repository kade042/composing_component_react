
import React, { Component } from 'react';
import GroceryList from './components/GroceryList';

class Hello extends Component {
  render() {
    return (
      <h1>Hello World!!</h1>
    );
  }
}


React.render(<GroceryList />, document.getElementById('root'));
