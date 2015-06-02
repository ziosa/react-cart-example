import React from 'react';
import ItemList from './itemList';
import Cart from './Cart';

const App = React.createClass({
  getInitialState: function () {
    return {
      itemsInCart: [],
      totalPrice: 0
    };
  },
  addToCart: function (item) {
    let allItems = this.state.itemsInCart.concat([item]);
    let tot = this.state.totalPrice;
    this.setState({
      itemsInCart: allItems,
      totalPrice: tot += item.price
    });
  },
  render() {
    return (
      <div>
        <ItemList addToCart={this.addToCart} items={this.props.items}/>
        <Cart items={this.state.itemsInCart} totalPrice={this.state.totalPrice}/>
      </div>
    );
  }
});

export
default App;
