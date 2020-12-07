import React, { Component } from "react";
import ReactDOM from "react-dom";

import { HashRouter, Route, Switch, NavLink } from "react-router-dom";
import "./../sass/style.scss";

import Welcome from "./components/IntroSection/Welcome";
import BeginnerPage from "./components/IntroSection/BeginnerPage";
import IntermediatePage from "./components/IntroSection/IntermediatePage";
import FreeridePage from "./components/IntroSection/FreeridePage";
import FreestylePage from "./components/IntroSection/FreestylePage";

import Fade from "react-reveal/Fade";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, animateScroll as scroll } from "react-scroll";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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

class StartingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objectArray: [],
      arrayWithoutDuplicatesToShowInBasket: [],
      productsPrice: 0,
    };
  }

  addObject = (product, counter) => {
    product.counter = counter;
    let newObjectArray = [...this.state.objectArray, product];
    this.setState({
      objectArray: newObjectArray,
    });
  };

  addCounter = (product) => {
    product.counter = product.counter + 1;
    let newObjectArray = [...this.state.objectArray, product];
    this.setState({
      objectArray: newObjectArray,
    });
  };

  deleteObject = (id) => {
    let newBasket = this.state.objectArray.filter((product) => {
      return product.id !== id;
    });
    this.setState({
      objectArray: newBasket,
    });
    console.log("coś się usunęło");
    let newArray = this.state.arrayWithoutDuplicatesToShowInBasket.filter(
      (product) => {
        return product.id !== id;
      }
    );
    this.setState({
      arrayWithoutDuplicatesToShowInBasket: newArray,
      //tutaj coś zeby znikneło z widoku renderowania utomatycznie.
    });
  };

  productsToShowInBasket = () => {
    let newarr = [];
    this.state.objectArray.forEach((element, index) => {
      element.amount = 1;
      if (this.state.objectArray.indexOf(element) != index) {
        element.amount += 1;
      } else {
        newarr.push(element);
      }
    });
    this.setState({
      arrayWithoutDuplicatesToShowInBasket: newarr,
    });
  };

  reduceCounter = (product) => {
    product.counter = product.counter - 1;
    if (product.counter === 0) {
      this.deleteObject(product.id);
      console.log(product.id);
    }
    let index = this.state.objectArray.findIndex((x) => x.name == product.name);
    let newArrayWithReducedCounter = this.state.objectArray;
    newArrayWithReducedCounter.splice(index, 1);
    this.setState({
      objectArray: newArrayWithReducedCounter,
    });
    this.sumProductsPrice();
  };

  sumProductsPrice = () => {
    let products = this.state.objectArray;

    if (products.length != 0) {
      const sum = products.reduce((x, y) => ({ price: x.price + y.price }));

      console.log(sum);
      this.setState({
        productsPrice: sum.price,
      });
    } else {
      this.setState({
        productsPrice: 0,
      });
    }
  };

  render() {
    return (
      <HashRouter >
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/beginner" component={BeginnerPage} />
          <Route exact path="/intermediate" component={IntermediatePage} />
          <Route
            exact
            path="/shop"
            render={(props) => (
              <Shop
                {...props}
                addItems={this.addObject}
                items={this.state.objectArray}
                changeCounter={this.changeCounter}
              />
            )}
          />
          <Route exact path="/freeride" component={FreeridePage} />
          <Route exact path="/freestyle" component={FreestylePage} />
          <Route
            exact
            path="/basket"
            render={(props) => (
              <BasketInside
                {...props}
                items={this.state.objectArray}
                itemsToShow={this.state.arrayWithoutDuplicatesToShowInBasket}
                delete={this.deleteObject}
                addCounter={this.addCounter}
                reduceCounter={this.reduceCounter}
                productsToShowInBasket={this.productsToShowInBasket}
                sum={this.state.productsPrice}
                sumProductsPrice={this.sumProductsPrice}
              />
            )}
          />
          <Route onUpdate={() => window.scrollTo(0, 0)}
            exact
            path="/snowboards"
            render={(props) => (
              <Snowboards {...props} 
              items={this.state.objectArray}
              addItems={this.addObject} />
            )}
          />
          <Route onUpdate={() => window.scrollTo(0, 0)}
            exact
            path="/shoes"
            render={(props) => (
              <Shoes {...props} 
              items={this.state.objectArray}
              addItems={this.addObject} />
            )}
          />
          <Route onUpdate={() => window.scrollTo(0, 0)}
            exact
            path="/bindings"
            render={(props) => (
              <Bindings {...props} 
              items={this.state.objectArray}
              addItems={this.addObject} />
            )}
          />
        </Switch>
      </HashRouter>
    );
  }
}

class Snowboards extends Component {
  state = {
    snowboardsArray: [],
    freestyleArray: [],
    freerideArray: [],
    allArray: [],
  };

  loadFreestyle = () => {
    let freestyle = this.state.snowboardsArray.filter((x) => {
      return x.ridingStyle === "freestyle";
    });
    this.setState({
      freestyleArray: freestyle,
    });
  };

  loadFreeride = () => {
    let freeride = this.state.snowboardsArray.filter((x) => {
      return x.ridingStyle === "freeride";
    });
    this.setState({
      freerideArray: freeride,
    });
  };

  loadAll = () => {
    let all = this.state.snowboardsArray.filter((x) => {
      return x.ridingStyle === "all";
    });
    this.setState({
      allArray: all,
    });
  };

  componentDidMount() {
    fetch("https://api.npoint.io/cf8c1b814d82abdc8bef/products")
      .then((resp) => {
        if (resp.ok) return resp.json();
        throw new Error("Problem with loading data");
      })
      .then((obj) => {
        const arr = obj.filter((x) => {
          return x.category === "snowboard";
        });
        this.setState({
          snowboardsArray: arr,
        });
      });
  }
  render() {
    return (
      <div className="main_product_area">
        <ShopHeader items={this.props.items} />
        <div className="products_area">
          <Filters
            loadFreestyle={this.loadFreestyle}
            loadFreeride={this.loadFreeride}
            loadAll={this.loadAll}
          />
          <SnowboardsProducts
            freestyle={this.state.freestyleArray}
            snowboardsArray={this.state.snowboardsArray}
            addItems={this.props.addItems}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

class Filters extends Component {
  state = {
    whatClicked: "",
  };

  handleBtn = (filter) => {
    if (filter === "freestyle") {
      this.setState({
        whatClicked: filter,
      });
      this.props.loadFreestyle();
    } else if (filter === "freeride") {
      this.setState({
        whatClicked: filter,
      });
      this.props.loadFreeride();
    } else {
      this.setState({
        whatClicked: "all",
      });
      this.props.loadAll();
    }
  };

  render() {
    return (
      <div className="filters">
        <h2>Filters</h2>
        <div
          onClick={() => this.handleBtn("freestyle")}
          className={
            this.state.whatClicked === "freestyle"
              ? "btn lines_effect btn_clicked"
              : "btn lines_effect"
          }
        >
          Freestyle
        </div>
        <div
          onClick={() => this.handleBtn("freeride")}
          className={
            this.state.whatClicked === "freeride"
              ? "btn lines_effect btn_clicked"
              : "btn lines_effect"
          }
        >
          Freeride
        </div>
        <div
          onClick={() => this.handleBtn("all")}
          className={
            this.state.whatClicked === "all"
              ? "btn lines_effect btn_clicked"
              : "btn lines_effect"
          }
        >
          All
        </div>
      </div>
    );
  }
}

class SnowboardsProducts extends Component {
  render() {
    const { snowboardsArray } = this.props;
    const {addItems}=this.props;
    return (
      <div className="container_products">
        <h2>SNOWBOARDS</h2>
        <div className="products_area">
          {snowboardsArray.map((product) => (
            <OneProduct
              product={product}
              brand={product.brand}
              name={product.name}
              img={product.imgSrc}
              price={product.price}
              key={product.id}
              addItems={addItems}
            />
          ))}
        </div>
      </div>
    );
  }
}

class OneProduct extends Component {
  render() {
    return <div className="one_product">
      <h2>{this.props.name} - {this.props.brand}</h2>
      <div
          style={{ backgroundImage: `url("${this.props.img}")` }}
          className="product_img"
        ></div>
      <p>Price: {this.props.price} $</p>
      <div className="product_btn" onClick={() => this.props.addItems(this.props.product)}>Add To Card</div>
    </div>
  }
}


class Shoes extends Component {
state={
  shoesArray:[]
}
  
  componentDidMount() {
    fetch("https://api.npoint.io/cf8c1b814d82abdc8bef/products")
      .then((resp) => {
        if (resp.ok) return resp.json();
        throw new Error("Problem with loading data");
      })
      .then((obj) => {
        const arr = obj.filter((x) => {
          return x.category === "shoes";
        });
        this.setState({
          shoesArray: arr,
        });
      });
  }
  render() {
    return (
      <>
        <div className="main_product_area">
        <ShopHeader items={this.props.items} />
        <div className="products_area">
          <Filters
            // loadFreestyle={this.loadFreestyle}
            // loadFreeride={this.loadFreeride}
            // loadAll={this.loadAll}
          />
          <ShoesProducts
            freestyle={this.state.freestyleArray}
            shoesArray={this.state.shoesArray}
          />
        </div>
        <Footer />
        </div>
      </>
    );
  }
}

class ShoesProducts extends Component{
  render(){
    const{shoesArray}=this.props;
    return(
      <div className="container_products">
        <h2>SHOES</h2>
        <div className="products_area">
          {shoesArray.map((product) => (
            <OneProduct
              product={product}
              brand={product.brand}
              name={product.name}
              img={product.imgSrc}
              price={product.price}
              key={product.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

class Bindings extends Component {
  state={
    bindingsArray:[]
  }
    
    componentDidMount() {
      fetch("https://api.npoint.io/cf8c1b814d82abdc8bef/products")
        .then((resp) => {
          if (resp.ok) return resp.json();
          throw new Error("Problem with loading data");
        })
        .then((obj) => {
          const arr = obj.filter((x) => {
            return x.category === "bindings";
          });
          this.setState({
            bindingsArray: arr,
          });
        });
    }
    render() {
      return (
        <>
          <div className="main_product_area">
          <ShopHeader items={this.props.items} />
          <div className="products_area">
            <Filters
              // loadFreestyle={this.loadFreestyle}
              // loadFreeride={this.loadFreeride}
              // loadAll={this.loadAll}
            />
            <BindingsProducts
              freestyle={this.state.freestyleArray}
              bindingsArray={this.state.bindingsArray}
            />
          </div>
          <Footer />
          </div>
        </>
      );
    }
  }

class BindingsProducts extends Component{
  render(){
    const{bindingsArray}=this.props;
    return(
      <div className="container_products">
        <h2>SHOES</h2>
        <div className="products_area">
          {bindingsArray.map((product) => (
            <OneProduct
              product={product}
              brand={product.brand}
              name={product.name}
              img={product.imgSrc}
              price={product.price}
              key={product.id}
            />
          ))}
        </div>
      </div>
    )
  }
}
class Shop extends Component {
  render() {
    return (
      <section className="shopView">
        <ShopHeader items={this.props.items} />
        <ShopBanner />
        <NotesWithIcons />
        <Articles />
        <CarousselWithItems
          addItems={this.props.addItems}
          changeCounter={this.props.changeCounter}
        />
        <Footer />
      </section>
    );
  }
}

class ShopHeader extends Component {
  state = {
    headerScrolledPosition: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let scrol = window.pageYOffset;
      if (scrol !== 0) {
        this.setState({
          headerScrolledPosition: 1,
        });
      } else {
        this.setState({
          headerScrolledPosition: 0,
        });
      }
    });
  }

  render() {
    const { items } = this.props;
    return (
      <div
        className={
          this.state.headerScrolledPosition === 0
            ? "shop_header"
            : "shop_header change_back_color"
        }
      >
        <Navigation />
        <AccountStripe items={this.props.items} />
      </div>
    );
  }
}

class ShopBanner extends Component {
  state = {
    bannerScrolledPosition: 0,
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let scrol = window.pageYOffset;

      this.setState({
        bannerScrolledPosition: scrol * 0.1,
      });
    });
  }
  render() {
    return (
      <div
        name="start"
        className="banner"
        style={{ backgroundPositionY: this.state.bannerScrolledPosition }}
      >
        <h2>SO!</h2>
        <h2>SNOW</h2>
        <div className="sale">
          <h1>SALE</h1>
          <h1>SALE</h1>
          <h1>SALE</h1>
          <h1>SALE</h1>
          <h1>SALE</h1>
        </div>
        <div></div>
      </div>
    );
  }
}

class NotesWithIcons extends Component {
  render() {
    return (
      <div className="notesWithIcons">
        <div>
          <i className="fas fa-undo"></i>
          <h2>30 Days To Return</h2>
          <p>
            You have 30 days to return the product from the day you purchased it
          </p>
        </div>
        <div>
          <i className="fas fa-shipping-fast"></i>
          <h2>Fast Shipping</h2>
          <p>You wait maximum 7 days for your product</p>
        </div>
        <div>
          <i className="far fa-handshake"></i>
          <h2>Guarantee Of Quality</h2>
          <p>We have products of the highest quality from the best producers</p>
        </div>
      </div>
    );
  }
}

class Articles extends Component {
  render() {
    return (
      <>
        <section className="background_for_articles">
          <div className="first_article">
            <Fade left>
              <div className="header_for_articles">
                <h2>Check the best places to ride</h2>
              </div>
            </Fade>
            <Fade right>
              <div className="img_desert"></div>
            </Fade>
          </div>
          <div className="second_article">
            <Fade left>
              <div className="img_snowboard"></div>
            </Fade>
            <Fade right>
              <div className="header_for_articles">
                <h2>Check how to take care of your equipment</h2>
              </div>
            </Fade>
          </div>
        </section>
      </>
    );
  }
}

class CarousselWithItems extends Component {
  state = {
    arrayWithProducts: [],
    newArrayWithProductsToCarousel: [],
  };
  handleBuyButton = (productDetails, counter) => {
    this.props.addItems(productDetails, counter);
  };
  componentDidMount() {
    fetch("https://api.npoint.io/b72a9368b693999e465d/products")
      // fetch("http://localhost:3000/products")"https://api.npoint.io/cf8c1b814d82abdc8bef/products"
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

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="newsletter">
            <h3>Newsletter</h3>
            <p>Sign to our newsletter to get all best news and prices</p>
            <form>
              <input
                className="email"
                type="email"
                placeholder="Write your email"
              ></input>
              <input className="submit" type="submit" value="Send"></input>
            </form>
          </div>
          <div className="footer_info">
            <div>
              <h3>Contact</h3>
              <p>
                <i className="fas fa-phone"></i>xxx xxx xxx
              </p>
              <p>
                <i className="fas fa-envelope-open-text"></i>xxx@gmail.com
              </p>
            </div>
            <div>
              <p>Delivery Options</p>
              <p>Return Policy</p>
              <p>Store Locations</p>
              <p>Help & FAQs</p>
            </div>
            <div>
              <h3>SO!</h3>
              <h3>SNOW</h3>
              <div>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

class Navigation extends Component {
  render() {
    return (
      <div className="container_nav">
        <div>
          <Link
            className="link below"
            to="start"
            spy={true}
            smooth={true}
            duration={700}
          >
            <NavLink className="title" exact to="/shop">
              <h2>SO!</h2>
              <h2>SNOW</h2>
            </NavLink>
          </Link>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <NavLink className="navigation_options" exact to="/snowboards">
                Snowboards
              </NavLink>
            </li>
            <li>
              <NavLink className="navigation_options" exact to="/shoes">
                Shoes
              </NavLink>
            </li>
            <li>
              <NavLink className="navigation_options" exact to="/bindings">
                Bindings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

class AccountStripe extends Component {
  state = {
    pageScrolled: false,
  };
  render() {
    const { items } = this.props;
    return (
      <section className="entering_stripe">
        <div>
          <Account />
          <NavLink exact to="/basket">
            <i className="fas fa-shopping-basket">
              <span>({items.length})</span>
            </i>
          </NavLink>
        </div>
      </section>
    );
  }
}

class Account extends Component {
  render() {
    return <i className="far fa-user account"> Account</i>;
  }
}

class BasketInside extends Component {
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

class App extends Component {
  render() {
    return (
      <>
        <StartingPage />
      </>
    );
  }
}

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App />, document.getElementById("app"));
});
