
  import React, { Component }  from 'react';
  import Carousel from "react-multi-carousel";



  
const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  class CarousselWithItems extends Component {
    state = {
      arrayWithProducts: [],
      newArrayWithProductsToCarousel: [],
    };
    handleBuyButton = (productDetails, counter) => {
      this.props.addItems(productDetails, counter);
    };
    componentDidMount() {
      fetch("https://api.npoint.io/50e69c6bc6f917a95f1b/products")
        // fetch("http://localhost:3000/products")
        .then((resp) => {
          return resp.json();
        })
        .then((obj) => {
          console.log(obj);
  
          for (let i = 0; i < 7; i++) {
            this.setState({
              arrayWithProducts: [...this.state.arrayWithProducts, obj[i]],
            });
          }
        });
    }
    render() {
      let productListJsx = this.state.arrayWithProducts.map((product) => (
        <ProductInCarousel
          product={product}
          brand={product.brand}
          name={product.name}
          img={product.imgSrc}
          price={product.price}
          handleBuyButton={this.handleBuyButton}
          changeCounter={this.props.changeCounter}
          key={product.id}
        />
      ));
  
      return (
        <div className="carousel">
          <Carousel
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            responsive={responsive}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {productListJsx}
          </Carousel>
        </div>
      );
    }
  }
  
  class ProductInCarousel extends Component {
    state = {
      counter: 1,
    };
    manageCounter = () => {
      this.setState({
        counter: this.state.counter + 1,
      });
    };
  
    render() {
      return (
        <div className="product">
          <h2>
            {" "}
            {this.props.brand} {this.props.name}
          </h2>
          <div
            style={{ backgroundImage: `url("${this.props.img}")` }}
            className="product_img"
          ></div>
          <h3>Price: {this.props.price} $</h3>
          <button
            onClick={() => {
              this.manageCounter();
              this.props.handleBuyButton(this.props.product, this.state.counter);
            }}
          >
            Add to Card
          </button>
        </div>
      );
    }
  }

  export default CarousselWithItems