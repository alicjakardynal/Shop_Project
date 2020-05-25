import React, { Component }  from 'react';
import { NavLink } from "react-router-dom";

class SkipIntro extends Component {
    render() {
      return (
        <>
          <button  className="skip_btn">
          <NavLink className="link" exact to="/shop">
                Skip Intro 
            <div className="skip_btn_horizontal"></div>
            <div className="skip_btn_vertical beginner"></div>
              </NavLink>
           
          </button>
          </>
       
      );
    }
  }

  export default SkipIntro;