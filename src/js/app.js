import React, { Component } from "react";
import ReactDOM from "react-dom";

import { HashRouter, Route, Switch, NavLink } from "react-router-dom";
import "./../sass/style.scss"; 


import IntroText from "./components/IntroText";
import Background from "./components/Background";
import BeginnerPage from "./components/BeginnerPage";
import IntermediatePage from "./components/IntermediatePage";
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

class FreeridePage extends Component{
  render(){
    return(
      <section className="firstView">
        <SkipIntro colorclass="beginner"/>
        <section>
          <div className="snowboard_gif freeride_gif"></div>
          <section className="slide freeride_slide">
          <div className="beginner-text">
            <p>
              <span>SNOWBOARD:</span> Recommended type -        Freeride - boards designed for riding in all conditions, mainly for fast driving on
                slopes and off-piste in virgin powder.</p>
            <p> <span>SHOES:</span> Recommended a hardness from 6 to 10 in softness FLEX scale.</p>
            <p> <span> BLINDINGS:</span> Snowboard bindings should be selected for the specific board.
               Recommended soft bindings for soft boards and vice versa - hard to hard.
            </p>
          </div></section>
          </section>
          
          </section>
    )
  }
}
class FreestylePage extends Component{
  render(){
    return
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
