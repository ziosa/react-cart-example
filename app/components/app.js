import React from 'react';
import ItemList from './itemList';


const Cart = React.createClass({
  render() {
      let totalCount = 0;
      let that = this;
      let createItem = function(item) {
        return (
          <li><h2>Name: {item.title} Price:{item.price}</h2></li>
          );
      };
      return(<div>
                <h1>Cart:</h1>
                <ul>{this.props.items.map(createItem)}</ul>
                <h2>Total: {this.props.totalPrice}</h2>
              </div>
            );
  }
});

const App = React.createClass({
  getInitialState: function() {
       return {
         itemsInCart: [],
         totalPrice : 0
         };
  },
  addToCart: function(item) {
    let allItems = this.state.itemsInCart.concat([item]);
    let tot = this.state.totalPrice;
    this.setState({
      itemsInCart : allItems,
      totalPrice : tot+=item.price
    });
  },
  render() {
    return (
        <div>
          <ItemList
            addToCart={this.addToCart}
            items={this.props.items}
          />
        <Cart items={this.state.itemsInCart} totalPrice={this.state.totalPrice}/>
        </div>
    );
  }
});

export default App;
