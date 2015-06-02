import React from 'react';

const Cart = React.createClass({
  render() {
    const cartRow = this.props.items.map((item) => {
      return (
        <li>
          <h2>
            Name: {item.title} Price:{item.price}
          </h2>
        </li>
      );
    });
    let totalValue = this.props.items.reduce((sum,item) => sum+item.price,0);
    return (
      <div>
        <h1>
          Cart:
        </h1>
        <ul>
          {cartRow}
        </ul>
        <h2>
          Total: {totalValue}
        </h2>
      </div>
    );
  }
});

export default Cart;
