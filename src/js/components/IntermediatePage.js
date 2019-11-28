import React, { Component }  from 'react';
import { NavLink } from "react-router-dom";
import SkipIntro from "./SkipIntro";

class IntermediatePage extends Component {
    render() {
      return (
        <>
        <section className="intermediate_view">
          <div className='images_intermediate'>
           <div className="freeride_image">
           <NavLink className="freeride_link" exact to="/freeride">
                FREERIDE
              </NavLink>
              <p>If you like riding outside the slopes </p>
           </div>
          <div className="freestyle_image">
          <NavLink className="freestyle_link" exact to="/freestyle">
                FREESTYLE
              </NavLink>
              <p>If You like riding in snowparks</p>
              </div> 
          </div>
          
          <SkipIntro/>
        </section>
        </>
      );
    }
  }

  export default IntermediatePage;