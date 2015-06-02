import React from 'react';

const Cart = React.createClass({
  render() {
    const createItem = function (item) {
      return (
        <li>
          <h2>
            Name: {item.title} Price:{item.price}
          </h2>
        </li>
      );
    };
    return (
      <div>
        <h1>
          Cart:
        </h1>
        <ul>
          {this.props.items.map(createItem)}
        </ul>
        <h2>
          Total: {this.props.items.reduce((sum,item) => sum+item.price,0)}
        </h2>
      </div>
    );
  }
});

export default Cart;
