import React from 'react';
import Item from './item';

let ItemList = React.createClass({
  render(){
    var that = this;
    return (
      <div>
        {this.props.items.map(function (item) {
          return (
            <Item key={item.id} addToCart={that.props.addToCart} title={item.title} img={item.img} price={item.price}></Item>
          )
        })}
      </div>
    );
  }
});


export default ItemList;
