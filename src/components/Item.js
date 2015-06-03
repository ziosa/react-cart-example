import React from 'react';

const Item = React.createClass({
  getInitialState: function () {
    return {
      cntItem: ''
    };
  },
  addItem: function (e) {
    e.preventDefault();
    this.props.addToCart(this.props.id, this.state.cntItem);
  },
  onChange: function (e) {
    this.setState({
      cntItem: e.target.value
    });
  },
  render() {
    return (
      <div className="row">
        <div claclassNamess="col-sm-6 col-md-4">
          <div className="thumbnail">
            <h3>{this.props.title}</h3>
            <img alt="photo" className="img-circle" src={this.props.img}/>
            <div className="caption">
              <p>
                {this.props.desc}
                <h3>
                  Price : {this.props.price} €</h3>
              </p>
              <form className="form-inline" onSubmit={this.addItem}>
                <input className="btn btn-default" onChange={this.onChange} placeholder="Enter quantity" ref='cntItem' type='text' value={this.state.cntItem}/>
                <input className="btn btn-default" type='submit' value='Add to Cart'/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export
default Item;
