import React, { Component } from "react";
import ReactDOM from "react-dom";

import { HashRouter, Route, Switch, NavLink } from "react-router-dom";
import "./../sass/style.scss";

import IntroText from "./components/IntroText";
import Background from "./components/Background";
import SkipIntro from "./components/SkipIntro";
import BeginnerPage from "./components/BeginnerPage";
import IntermediatePage from "./components/IntermediatePage";
import FreeridePage from "./components/FreeridePage";
import FreestylePage from "./components/FreestylePage";
import { Hash } from "crypto";

/*coś tutaj z SHop component inne renderowanie bo nie będę tworzyć jednego componentu tylko
tam przekazyac różne ...*/
class StartingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objectArray: [],
    };
  }
 
  addObject = (product) => {
   
        let newObjectArray = [...this.state.objectArray, product];
        this.setState({
            objectArray: newObjectArray
        })
    
}

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/beginner" component={BeginnerPage} />
          <Route exact path="/intermediate" component={IntermediatePage} />
          <Route exact path="/shop" render={props => <Shop {...props} addItems={this.addObject}/>} />
          <Route exact path="/freeride" component={FreeridePage} />
          <Route exact path="/freestyle" component={FreestylePage} />
          <Route exact path ="/basket" render={props => <BasketInside {...props} items={this.state.objectArray}/>}/>
        </Switch>
      </HashRouter>
    );
  }
}

class Welcome extends Component {
  render() {
    return (
      <section className="welcoming-page">
        <Background />
        <SkipIntro />
        <IntroText text="Hi ! Choose if You are:" />
        <ChooseOptions />
      </section>
    );
  }
}

class ChooseOptions extends Component {
  render() {
    return (
      <>
        <div className="intro_btn_position">
          <BeginnerButton />
          <IntermediateButton />
        </div>
      </>
    );
  }
}

class BeginnerButton extends Component {
  render() {
    return (
      <HashRouter>
        <div className="shape_for_text">
          <button className="beginner_btn">
            <NavLink className="link" exact to="/beginner">
              Beginner
            </NavLink>
          </button>
        </div>
        <Switch>
          <Route exact path="/beginner" component={BeginnerPage} />
        </Switch>
      </HashRouter>
    );
  }
}

class IntermediateButton extends Component {
  render() {
    return (
      <HashRouter>
        <div className="shape_for_text">
          <button className="intermediate_btn">
            <NavLink className="link" exact to="/intermediate">
              More than Beginner
            </NavLink>
          </button>
        </div>
        <Switch>
          <Route
            exact
            path="/intermediate"
            component={IntermediatePage}
          ></Route>
        </Switch>
      </HashRouter>
    );
  }
}

class Shop extends Component {
  render() {
    return (
      <section className="firstView">
        <Basket />
        <div className="shop_position">
          <Navigation />
          <ShopBackground addItems={this.props.addItems}/>
        </div>
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
class ShopBackground extends Component {
  render() {
    return (
      <div className="shop_background">
        <Item1 addItems={this.props.addItems}/>
        <Item2 />
        <Item3 />
      </div>
    );
  }
}

class Item1 extends Component {
  state={
    name:"Snowboard Burton Flex:4",
    price: "1500$"

  }
  handleBuyButton = () => {
    const {addItems} = this.props;
    addItems(this.state.name
      // name:this.state.name,
      // price:this.state.price
    );
    console.log("działa")
  };
  render() {
    return (
      <section className="product">
        <h2>{this.state.name}</h2>
        <img src="images/5ddfa112e7003.png" className="product_image"></img>
        <p className="price">{this.state.price}</p>
        <a onClick={this.handleBuyButton}className="btn">Buy</a>
        <NavLink exact to="/product"></NavLink>
      </section>
    );
  }
}
class Item2 extends Component {
  handleBuyButton = () => {};
  render() {
    return (
      <section className="product">
        <h2>Snowboard Roxy Flex:7</h2>
        <img src="images/5ddfa112e7003.png" className="product_image"></img>
        <p className="price">1000$</p>
        <a className="btn">Buy</a>
        <NavLink exact to="/product"></NavLink>
      </section>
    );
  }
}
class Item3 extends Component {
  handleBuyButton = () => {};
  render() {
    return (
      <section className="product">
        <h2>Snowboard Head Flex:5</h2>
        <img src="images/5ddfa112e7003.png" className="product_image"></img>
        <p className="price">700$</p>
        <a className="btn">Buy</a>
        <NavLink exact to="/product"></NavLink>
      </section>
    );
  }
}

//na btn musze zrobic on click ktory wysyła wtedy caly item do koszyka

class Navigation extends Component {
  render() {
    return (
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
            <NavLink className="navigation_options" exact to="/blindings">
              Bindings
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

class Basket extends Component {
  render() {
    return (
      <section className="entering_stripe">
        <NavLink exact to="/basket"><i className="fas fa-shopping-basket"></i></NavLink>
      </section>
    );
  }
}
 class BasketInside extends Component{
   render() {
     return (
        <section className="firsView">
          <h1>{this.props.items}</h1>
        </section>
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
