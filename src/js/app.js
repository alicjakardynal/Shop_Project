import React, { Component } from "react";
import ReactDOM from "react-dom";

import { HashRouter, Route, Switch, NavLink } from "react-router-dom";
import "./../sass/style.scss";

import Welcome from "./components/IntroSection/Welcome";
import BeginnerPage from "./components/IntroSection/BeginnerPage";
import IntermediatePage from "./components/IntroSection/IntermediatePage";
import FreeridePage from "./components/IntroSection/FreeridePage";
import FreestylePage from "./components/IntroSection/FreestylePage";
import { Hash } from "crypto";
import Fade from "react-reveal/Fade";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



class StartingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objectArray: []
    };
  }

  addObject = product => {
    let newObjectArray = [...this.state.objectArray, product];
    this.setState({
      objectArray: newObjectArray
    });
  };
  deleteObject = id => {
    const newBasket = this.state.objectArray.filter(product => {
      return product.id !== id;
    });
    this.setState({
      objectArray: newBasket
    });
    console.log("coś się usunęło");
  };

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/beginner" component={BeginnerPage} />
          <Route exact path="/intermediate" component={IntermediatePage} />
          <Route
            exact
            path="/shop"
            render={props => (
              <Shop
                {...props}
                addItems={this.addObject}
                items={this.state.objectArray}
              />
            )}
          />
          <Route exact path="/freeride" component={FreeridePage} />
          <Route exact path="/freestyle" component={FreestylePage} />
          <Route
            exact
            path="/basket"
            render={props => (
              <BasketInside
                {...props}
                items={this.state.objectArray}
                delete={this.deleteObject}
              />
            )}
          />
        </Switch>
      </HashRouter>
    );
  }
}

class Shop extends Component {
  render() {
    return (
      <section className="shopView">
        <ShopHeader />
        <ShopBanner />
        <NotesWithIcons />
        <Articles />
        <CarousselWithItems/>
       
        {/* <ShopBackground addItems={this.props.addItems} /> */}
      </section>
      /* <HashRouter>
  <Switch>
     <Route exact path="/basket" component={Welcome} />
       <Route exact path="/snowboards" component={BeginnerPage} />
     <Route exact path="/shoes" component={IntermediatePage} />
     <Route exact path="/blindings" component={Shop} />
    
        
     </Switch>
 </HashRouter>  */
    );
  }
}

class ShopHeader extends Component {
 git 
  render() {
    return (
      <div className="shop_header">
        <Navigation />
        <AccountStripe items={this.props.items} />
      </div>
    );
  }
}
class ShopBanner extends Component {
  state = {
    bannerScrolledPosition: 0
    };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let scrol = window.pageYOffset;
      
      this.setState({
        bannerScrolledPosition: scrol * 0.1
      });
    });

    fetch("http://localhost:3000/products")
    .then(r => r.json())
    .then(ip => {
      console.log(ip);
      console.log(ip[0].imgSrc)
    })
    // .catch(err => {
    //   console.log(err);
    // });
  }
  render() {
    return (
      <div
        className="banner"
        style={{ backgroundPositionY: this.state.bannerScrolledPosition }}
      >
        <div className="sale">
          <h1>SALE</h1>
          <h1>SALE</h1>
          <h1>SALE</h1>
          <h1>SALE</h1>
          <h1>SALE</h1>
        </div>
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
 
 


class CarousselWithItems extends  Component{

render(){
 
  return(
  <section className="caroussel_area">
<Carousel responsive={responsive}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;
      
  </section>
 
  )
}
}
//THESE THREE PRODUCTS TO MODERETE LATER

// class ShopBackground extends Component {
//   render() {
//     return (
//       <div className="shop_background">
//         <Item1 addItems={this.props.addItems}/>
//         <Item2 addItems={this.props.addItems}/>
//         <Item3 addItems={this.props.addItems}/>
//       </div>
//     );
//   }
// }

// class Item1 extends Component {
//   state = {
//     object: {
//       name: "Snowboard Burton Flex:4",
//       price: "1500$",
//       imageSourse: "../images/5dde49c4d887b.png",
//       id: 1
//     }
//   };
//   handleBuyButton = () => {
//     const { addItems } = this.props;
//     addItems(this.state.object);
//   };
//   render() {
//     return (
//       <section className="product">
//         <h2>{this.state.object.name}</h2>
//         <img
//           src={this.state.object.imageSourse}
//           className="product_image"
//         ></img>
//         <p className="price">{this.state.object.price}</p>
//         <a onClick={this.handleBuyButton} className="btn_shop">
//           Buy
//         </a>
//         <NavLink exact to="/product"></NavLink>
//       </section>
//     );
//   }
// }
// class Item2 extends Component {
//   state = {
//     object: {
//       name: "Snowboard Roxy Flex:7",
//       price: "1000$",
//       imageSourse: "../images/5dde49c4d887b.png",
//       id: 2
//     }
//   };
//   handleBuyButton = () => {
//     const { addItems } = this.props;
//     addItems(this.state.object);
//   };

//   render() {
//     return (
//       <section className="product">
//         <h2>{this.state.object.name}</h2>
//         <img
//           src={this.state.object.imageSourse}
//           className="product_image"
//         ></img>
//         <p className="price">{this.state.object.price}</p>
//         <a onClick={this.handleBuyButton} className="btn_shop">
//           Buy
//         </a>
//         <NavLink exact to="/product"></NavLink>
//       </section>
//     );
//   }
// }
// class Item3 extends Component {
//   state = {
//     object: {
//       name: "Snowboard Nitro N Flex:5",
//       price: "700$",
//       imageSourse: "../images/5dde49c4d887b.png",
//       id: 3
//     }
//   };
//   handleBuyButton = () => {
//     const { addItems } = this.props;
//     addItems(this.state.object);
//   };

//   render() {
//     return (
//       <section className="product">
//         <h2>{this.state.object.name}</h2>
//         <img
//           src={this.state.object.imageSourse}
//           className="product_image"
//         ></img>
//         <p className="price">{this.state.object.price}</p>
//         <a onClick={this.handleBuyButton} className="btn_shop">
//           Buy
//         </a>
//         <NavLink exact to="/product"></NavLink>
//       </section>
//     );
//   }
// }

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <div className="snowboarder_img"></div>
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
            <NavLink className="navigation_options" exact to="/blindings">
              Bindings
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

class AccountStripe extends Component {
  state = {
    pageScrolled: false
  };
  render() {
    const { items } = this.props;
    return (
      <section className="entering_stripe">
        <div>
          <Account />
          <NavLink exact to="/basket">
            <i className="fas fa-shopping-basket">
              {/* <span>({items.length})</span> */}
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
  render() {
    const { items } = this.props;
    return (
      <section className="firsView">
        <div>
          PIĘKNIE WYSTYLIZOWANY BASKET
          <ol>
            {items.map((product, index) => (
              <ImportedProduct
                key={index}
                id={product.id}
                name={product.name}
                imageSourse={product.imageSourse}
                price={product.price}
                delete={this.props.delete}
              />
            ))}
          </ol>
        </div>
      </section>
    );
  }
}

class ImportedProduct extends Component {
  handleDeleteBtn = id => {
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
          <h2 className="item_name_in_basket">{this.props.name}</h2>
          <p className="item_price_in_basket">Price: {this.props.price}</p>
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

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.getElementById("app"));
});
