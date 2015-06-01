import React from 'react';

const Item = React.createClass({
  addItem: function (e) {
    e.preventDefault();
    this.props.addToCart(this.props);
    return;
  },
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.img}/>
        <p>{this.props.price}</p>
        <form onSubmit={this.addItem}>
          <input type='submit' value='Add to Cart'/>
        </form>
      </div>
    );
  }
});

export
default Item;
