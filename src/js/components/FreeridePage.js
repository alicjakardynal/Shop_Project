import React, { Component }  from 'react';
import { NavLink } from "react-router-dom";
import SkipIntro from "./SkipIntro";

class FreeridePage extends Component{
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
    render(){
      return(
        <section className="firstView">
            <div className="snowboard_gif freeride_gif"></div>
            <section className="slide freeride_slide">
            <div className="beginner-text">
            <h1>Freeride Rider</h1>
              <p>
                <span>SNOWBOARD:</span> Recommended type -        Freeride - boards designed for riding in all conditions, mainly for fast driving on
                  slopes and off-piste in virgin powder.</p>
              <p> <span>SHOES:</span> Recommended a hardness from 6 to 10 in softness FLEX scale.</p>
              <p> <span> BLINDINGS:</span> Snowboard bindings should be selected for the specific board.
                 Recommended soft bindings for soft boards and vice versa - hard to hard.
              </p>
            </div>
            </section>
            <span onMouseEnter={this.linkApear} onMouseLeave={this.linkDisapear} className="goToIntermediate">
            {this.state.render=== true && <NavLink className="link_intermediate" exact to="/freestyle">Go to Freestyle</NavLink> }
            </span>
            <SkipIntro colorclass="beginner"/>
            </section>
      )
    }
  }

  export default FreeridePage;