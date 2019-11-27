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
      <section className="firstView">
        <div className="snowboard_gif"></div>
        <section className="slide">
        <div className="beginner-text">
          <p>
            <span>SNOWBOARD:</span> Recommended type -        All Mountain - category of the most universal boards.<br></br>1-4 in softness FLEX scale</p>
          <p> <span>SHOES:</span> Recommended a hardness from 1 to 4 in softness FLEX scale.</p>
          <p> <span> BLINDINGS:</span> Snowboard bindings should be selected for the specific board.
             Recommended soft bindings for soft boards and vice versa - hard to hard.
          </p>
        </div>
        </section>
        <span className="goToIntermediate">
          <NavLink className="link_intermediate" exact to="/intermediate">Go to Intermediate</NavLink>
        </span>
        <SkipIntro colorclass="beginner"/>
        </section>
     
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
          <div className="skip_btn_vertical beginner"></div>
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
