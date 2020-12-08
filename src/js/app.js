import React, { Component } from "react";
import ReactDOM from "react-dom";

import { HashRouter, Route, Switch, NavLink } from "react-router-dom";
import "./../sass/style.scss";

import Welcome from "./components/IntroSection/Welcome";
import BeginnerPage from "./components/IntroSection/BeginnerPage";
import IntermediatePage from "./components/IntroSection/IntermediatePage";
import FreeridePage from "./components/IntroSection/FreeridePage";
import FreestylePage from "./components/IntroSection/FreestylePage";



import Snowboards from "./components/Shop/Snowboards";
import Shoes from "./components/Shop/Shoes";
import Bindings from "./components/Shop/Bindings";
import ShopHomePage from "./components/Shop/ShopHomePage";
import Basket from "./components/Shop/Basket";



import Fade from "react-reveal/Fade";

import "react-multi-carousel/lib/styles.css";
import { Link, animateScroll as scroll } from "react-scroll";



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
          <Route onUpdate={() => window.scrollTo(0, 0)}
            exact
            path="/shop"
            render={(props) => (
              <ShopHomePage
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
              <Basket
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
              addItems={this.addObject} 
              changeCounter={this.changeCounter}
              />
            )}
          />
          <Route onUpdate={() => window.scrollTo(0, 0)}
            exact
            path="/shoes"
            render={(props) => (
              <Shoes {...props} 
              items={this.state.objectArray}
              addItems={this.addObject}
              changeCounter={this.changeCounter}
               />
            )}
          />
          <Route onUpdate={() => window.scrollTo(0, 0)}
            exact
            path="/bindings"
            render={(props) => (
              <Bindings {...props} 
              items={this.state.objectArray}
              addItems={this.addObject}
              changeCounter={this.changeCounter}
               />
            )}
          />
        </Switch>
      </HashRouter>
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
