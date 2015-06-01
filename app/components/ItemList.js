import React from 'react';
import Item from './item';

let ItemList = React.createClass({
  render(){
    return (
      <div>
        {this.props.items.map(function (item) {
          return (
            <Item key={item.id} addToCart={this.props.addToCart} title={item.title} img={item.img} price={item.price}></Item>
          )
        }.bind(this))}
      </div>
    );
  }
});


export default ItemList;
