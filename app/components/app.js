import React from 'react';

let Item = React.createClass({
  render() {
    return (
            <div>
              <h2>{this.props.title}</h2>
              <img src={this.props.img}/>
              <p>{this.props.price}</p>
            </div>
          );
  }
});

let Cart = React.createClass({
  render() {
    return (<div><h1>Cart</h1></div>);
  }
});

let ItemList = React.createClass({
  render(){
    return (
      <div>
        {this.props.items.map(function (item) {
          return (
            <Item title={item.title} img={item.img} price={item.price}></Item>
          )
        })}
      </div>
    );
  }
});

let App = React.createClass({
  render() {
    return (
        <div>
          <ItemList items={this.props.items}></ItemList>
          <Cart />
        </div>
    );
  }
});

export default App;
