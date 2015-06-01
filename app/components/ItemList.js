import React from 'react';
import Item from './item';

let ItemList = React.createClass({
  render(){
    const row = this.props.items.map((item) => {
          return (
            <Item
              key={item.id}
              addToCart={this.props.addToCart}
              title={item.title}
              img={item.img}
              price={item.price}
            />
          )});
    return (
      <div>
        {row}
      </div>
    );
  }
});


export default ItemList;
