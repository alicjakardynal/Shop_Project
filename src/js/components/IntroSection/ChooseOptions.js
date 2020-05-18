import React, { Component } from "react";
import BeginnerPage from "../IntroSection/BeginnerPage";
import IntermediatePage from "../IntroSection/IntermediatePage";

import { HashRouter, Route, Switch, NavLink } from "react-router-dom";

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

  export default ChooseOptions;