import React from 'react';
import ItemList from './itemList';


const Cart = React.createClass({
  render() {
      let createItem = function(itemText) {
        return (
          <li><h2>Name: {itemText.title} Price:{itemText.price}</h2></li>
          );
      };
      return <div><h1>Cart:</h1><ul>{this.props.items.map(createItem)}</ul></div>;
  }
});

const App = React.createClass({
  getInitialState: function() {
       return {itemsInCart: []};
  },
  addToCart: function(item) {
    let allItems = this.state.itemsInCart.concat([item]);
        this.setState({
          itemsInCart: allItems
    });
  },
  render() {
    return (
        <div>
          <ItemList
            addToCart={this.addToCart}
            items={this.props.items}
          />
          <Cart items={this.state.itemsInCart}/>
        </div>
    );
  }
});

export default App;
