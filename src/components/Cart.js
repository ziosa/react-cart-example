import React from 'react';

const Cart = React.createClass({
  getInitialState: function () {
    return {
      cntItem: ''
    };
  },
  onChange: function (e) {
    console.log(this.props.items);
    this.setState({
      cntItem: e.target.value
    });
  },
  render() {
    const cartRow = this.props.items.map((item) => {
      return (
        <li key={item.id}>
          <div>
            <p>Name: {item.title}</p>
            <div>{item.price}
              € x {item.cntItem}
              = {item.price * item.cntItem} €
            </div>
            </div>
        </li>
      );
    });
    let totalValue = this.props.items.reduce((sum, item) => sum + item.price, 0);
    return (
      <div className="col-md-6">
        <h1>
          Cart:
        </h1>
        <ul>
          {cartRow}
        </ul>
        <h2>
          Total: {totalValue} €
        </h2>
      </div>
    );
  }
});

export
default Cart;
