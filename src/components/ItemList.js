import React from 'react';
import Item from './item';

const ItemList = React.createClass({
  render() {
    const row = this.props.items.map((item) => {
      return (
        <Item
          addToCart={this.props.addToCart}
          img={item.img} key={item.id} id={item.id}
          price={item.price}
          title={item.title}
          desc={item.desc}
        />
      );
    });
    return (
      <div  className="col-md-6">
        <h1>Product List</h1>
        {row}
      </div>
    );
  }
});

export
default ItemList;
