import React, { Component }  from 'react';

class OneProduct extends Component {
    state = {
      counter: 1,
    };
    manageCounter = () => {
      this.setState({
        counter: this.state.counter + 1,
      });
    };
    handleBuyButton = (productDetails, counter) => {
      this.props.addItems(productDetails, counter);
    };
    render() {
      return <div className="one_product">
        <h2>{this.props.name} - {this.props.brand}</h2>
        <div
            style={{ backgroundImage: `url("${this.props.img}")` }}
            className="product_img"
          ></div>
        <p>Price: {this.props.price} $</p>
        <div className="product_btn"  onClick={() => {
              this.manageCounter();
              this.handleBuyButton(this.props.product, this.state.counter);
            }}
            >Add To Card</div>
      </div>
    }
  }

  
export default OneProduct;