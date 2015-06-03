import React from 'react';
import ItemList from './itemList';
import Cart from './Cart';
import lodash from 'lodash';

const App = React.createClass({
  getInitialState: function () {
    return {
      itemsInCart: []
    };
  },
  addToCart: function (indexItem, cntItem) {
    let findItem = _.find(this.state.itemsInCart, {
      'id': indexItem
    });
    let currentItem,
      copyItems;
    if (!_.isUndefined(findItem)) {
      currentItem = this.props.items.filter(item => item.id === indexItem)[0];
      findItem.price += currentItem.price * cntItem;
      this.setState({
        itemsInCart: this.state.itemsInCart
      });
    } else {
      copyItems = _.clone(this.props.items, true);
      currentItem = copyItems.filter(item => item.id === indexItem)[0];
      currentItem.price = currentItem.price * cntItem;
      this.setState({
        itemsInCart: this.state.itemsInCart.concat(currentItem)
      });
    }
  },
  render() {
    return (
      <div className="row">
        <ItemList addToCart={this.addToCart} items={this.props.items}/>
        <Cart items={this.state.itemsInCart}/>
      </div>
    );
  }
});

export
default App;
