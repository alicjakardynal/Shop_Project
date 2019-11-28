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

class StartingPage extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/beginner" component={BeginnerPage} />
          <Route exact path="/intermediate" component={IntermediatePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/freeride" component={FreeridePage} />
          <Route exact path="/freestyle" component={FreestylePage} />
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
         <ShopBackground />
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
    return <div className="shop_background">
      <Item/>
      <Item/>
      <Item/>
    </div>;
  }
}

class Item extends Component{
  render() {
    return (
      <section className="product">
        <h2>Snowboard Burton Flex:4</h2>
<div className="product_image"></div>
<p className="price">1500$</p>
<a class="btn">Kupuję</a>
<NavLink exact to="/product"></NavLink>
      </section>
       
    );
  }
}
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
              Blindings
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
        <i className="fas fa-shopping-basket"></i>
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
