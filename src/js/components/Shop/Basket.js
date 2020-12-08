import React, { Component }  from 'react';
import ShopHeader from "./ShopHeader";


class Basket extends Component {
    state = {
      withoutDuplicates: [],
    };
  
    componentDidMount() {
      const { itemsToShow } = this.props;
      this.props.sumProductsPrice();
      this.props.productsToShowInBasket();
    }
    componentDidUpdate(prevProps) {
      if (this.props.items !== prevProps.items) {
        this.props.sumProductsPrice();
      }
    }
  
    //local storage tutaj bo nie zapisuje po odswiezeniu
  
    render() {
      const { sum } = this.props;
      const { itemsToShow } = this.props;
      const { items } = this.props;
      return (
        <section className="basket">
          <ShopHeader items={this.props.items} />
  
          <div className="basket_area">
            <div className="product_list">
              <ol>
                <div className="headings ala">
                  <h2>Brand and Name</h2>
                  <h2>Price</h2>
                  <h2>Amount</h2>
                </div>
                <div
                  className={
                    items.length == 0 ? "empty_basket" : "none_empty_basket"
                  }
                >
                  Your Basket Is Empty
                </div>
                {itemsToShow.map((product, index) => (
                  <ImportedProduct
                    key={index}
                    id={product.id}
                    name={product.name}
                    imageSourse={product.imgSrc}
                    price={product.price}
                    delete={this.props.delete}
                    brand={product.brand}
                    amount={product.counter}
                    addCounter={this.props.addCounter}
                    reduceCounter={this.props.reduceCounter}
                    product={product}
                  />
                ))}
              </ol>
            </div>
            <div className="order_summary">
              <h2>Your Order</h2>
              <p>
                Products Price: <span>{sum} $</span>
              </p>
              <p>
                Delivery Price: : <span>10 $</span>
              </p>
              <p>
                SUM: : <span>{sum + 10} $</span>
              </p>
            </div>
          </div>
        </section>
      );
    }
  }
  
  class ImportedProduct extends Component {
    handleDeleteBtn = (id) => {
      this.props.delete(id);
    };
  
    render() {
      return (
        <>
          <div className="item_in_basket">
            <img
              className="item_img_in_basket"
              src={this.props.imageSourse}
            ></img>
            <h2 className="item_name_in_basket">
              {this.props.brand} - {this.props.name}
            </h2>
            <p className="item_price_in_basket"> {this.props.price} $</p>
            <div className="product_counter">
              <i
                className="fas fa-long-arrow-alt-left"
                onClick={() => this.props.reduceCounter(this.props.product)}
              ></i>
              <p>{this.props.amount}</p>
              <i
                className="fas fa-long-arrow-alt-right"
                onClick={() => this.props.addCounter(this.props.product)}
              ></i>
            </div>
            <button
              onClick={() => this.handleDeleteBtn(this.props.id)}
              className="btn_delete"
            >
              Delete Product
            </button>
          </div>
        </>
      );
    }
  }

  export default Basket