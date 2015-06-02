import React from 'react';
import ItemList from './itemList';
import Cart from './Cart';

const App = React.createClass({
  getInitialState: function () {
    return {
      itemsInCart: []
    };
  },
  addToCart: function (item) {
    let allItems = this.state.itemsInCart.concat([item]);
    this.setState({
      itemsInCart: allItems,
    });
  },
  render() {
    return (
      <div>
        <ItemList addToCart={this.addToCart} items={this.props.items}/>
        <Cart items={this.state.itemsInCart} />
      </div>
    );
  }
});

export
default App;
