import React from 'react';

let Item = React.createClass({
  addItem: function() {
    this.props.addToCart();
  },
  render() {
    return (
            <div>
              <h2>{this.props.title}</h2>
              <img src={this.props.img}/>
              <p>{this.props.price}</p>
              <input
                type="button"
                value="Add item"
                onClick={this.addItem}
              />
            </div>
          );
  }
});


export default Item;
