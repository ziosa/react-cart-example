import React from 'react';
import ItemList from './itemList';


let Cart = React.createClass({
  render() {
    return (<div><h1>Cart</h1></div>);
  }
});

let App = React.createClass({
  addToCart: function(newState) {
    console.log("padre chiamato");
  },
  render() {
    return (
        <div>
          <ItemList addToCart={this.addToCart}          items={this.props.items}></ItemList>
          <Cart />
        </div>
    );
  }
});

export default App;
