import React, { Component }  from 'react';
import { NavLink } from "react-router-dom";

class SkipIntro extends Component {
    render() {
      return (
        <>
          <button onClick={this.handleSkipButton} className="skip_btn">
          <NavLink className="link" exact to="/shop">
                Skip Intro
              </NavLink>
            <div className="skip_btn_horizontal"></div>
            <div className="skip_btn_vertical beginner"></div>
          </button>
          </>
       
      );
    }
  }

  export default SkipIntro;