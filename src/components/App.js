import React from 'react';
import ItemList from './itemList';
import Cart from './Cart';

const App = React.createClass({
  getInitialState: function () {
    return {
      itemsInCart: []
    };
  },
  addToCart: function (indexItem,cntItem) {
    let copyItems = this.props.items.slice();
    let currentItem = copyItems.filter(item => item.id === indexItem);
    currentItem[0].price=currentItem[0].price*cntItem;
    let allItems = this.state.itemsInCart.concat(currentItem);
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
