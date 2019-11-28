import React, { Component }  from 'react';
import { NavLink } from "react-router-dom";
import SkipIntro from "./SkipIntro";

class FreestylePage extends Component{
    state={
      render: false
    }
  linkApear=()=>{
    this.setState({
      render: true })
  }
  
  linkDisapear=()=>{
    this.setState({
      render: false
  })
  }
  
    render() {
      return ( 
        <section className="firstView">
          <div className="snowboard_gif freestyle_gif"></div>
          <section className="slide freestyle_slide">
          <div className="beginner-text">
            <h1>Freestyle Rider</h1>
            <p>
              <span>SNOWBOARD:</span> Recommended type -        Freestyle - these are usually soft boards in the shape of a double tip 
              that work well in a snowpark.<br></br><br></br>Jibbing - boards slightly shorter, usually have a few degrees raised edges,
               which makes it easier to slide along handrails and walls.</p>
            <p> <span>SHOES:</span> Recommended a hardness from 1 to 4 in softness FLEX scale.</p>
            <p> <span> BLINDINGS:</span> Snowboard bindings should be selected for the specific board.
               Recommended soft bindings for soft boards and vice versa - hard to hard.
            </p>
          </div>
          </section>
          <span onMouseEnter={this.linkApear} onMouseLeave={this.linkDisapear} className="goToIntermediate">
          {this.state.render=== true && <NavLink className="link_intermediate" exact to="/shop">Go to Shop</NavLink> }
          </span>
          <SkipIntro colorclass="beginner"/>
          </section>
       
      );
    }
  }
  
  export default FreestylePage;