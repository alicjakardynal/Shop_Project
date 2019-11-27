import React, { Component } from "react";
import ReactDOM from "react-dom";

import { HashRouter, Route, Switch, NavLink } from "react-router-dom";
import "./../sass/style.scss"; // adres do głównego pliku SASS
import IntroText from "./components/IntroText";
import Background from "./components/Background";
import { Hash } from "crypto";

class StartingPage extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/beginner" component={BeginnerPage} />
          <Route exact path="/itermediate" component={IntermediatePage} />
          <Route exact path="/shop" component={Shop} />
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

class BeginnerPage extends Component {
  render() {
    return (
      <>
        <section className="slide">lets see if works</section>
      </>
    );
  }
}
class IntermediatePage extends Component {
  render() {
    return <h1>intermediate</h1>;
  }
}

class SkipIntro extends Component {
  
  render() {
    return (
      <HashRouter>
        <button onClick={this.handleSkipButton} className="skip_btn">
        <NavLink className="link" exact to="/shop">
              Skip Intro
            </NavLink>
          <div className="skip_btn_horizontal"></div>
          <div className="skip_btn_vertical"></div>
        </button>
      </HashRouter>
    );
  }
}
class ChooseOptions extends Component {
  render() {
    return (
      <>
        <div className="intro_btn_position">
          <BegginerButton />
          <IntermediateButton />
        </div>
      </>
    );
  }
}

class BegginerButton extends Component {
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


class Shop extends Component{
  render(){
    return<h1>TUTAJ BEDZIE</h1>
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
