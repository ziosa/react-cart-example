import React from 'react';

const Item = React.createClass({
  getInitialState: function () {
    return {
      cntItem: ''
    };
  },
  addItem: function (e) {
    e.preventDefault();
    this.props.addToCart(this.props.id,this.state.cntItem);
  },
  onChange: function (e) {
    this.setState({
      cntItem: e.target.value
    });
  },
  render() {
    return (
      <div>
        <h2>
          {this.props.title}
        </h2>
        <img src={this.props.img}/>
        <p>
          {this.props.price}
        </p>
        <form onSubmit={this.addItem}>
          <input onChange={this.onChange} ref='cntItem' type='text' value={this.state.cntItem}/>
          <input type='submit' value='Add to Cart'/>
        </form>
      </div>
    );
  }
});

export default Item;
