import React from 'react';
import Item from './item';

const ItemList = React.createClass({
  render() {
    const row = this.props.items.map((item) => {
      return (
        <Item
          addToCart={this.props.addToCart}
          img={item.img} key={item.id}
          price={item.price}
          title={item.title}
        />
      );
    });
    return (
      <div>
        {row}
      </div>
    );
  }
});

export
default ItemList;
