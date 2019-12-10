import React, { Component }  from 'react';
import { Switch, NavLink, Redirect } from "react-router-dom";
import SkipIntro from "./SkipIntro";

class FreeridePage extends Component{
    state={
      render1: false,
      render2: false,
      render3: false,
      path:""
    }
  linkApear1=()=>{
    this.setState({
      render1: true,
     
     })
  }
  linkApear2=()=>{
    this.setState({
      render2: true,
     
     })
  }
  linkApear3=()=>{
    this.setState({
      
      render3: true
     })
  }
  
  linkDisapear=()=>{
    this.setState({
      render1: false,
      render2: false,
      render3: false
  })
  }
 handleKeyDown =(event)=>{
   switch (event.which) {
          case 37:
              {  
                this.setState({
                  path:"/beginner"
                })
              
                  break;
              }
          case 39:
              {
                this.setState({
                  path:"/freestyle"
                })
                  break;
              }
        
      }
 }


componentDidMount(){

document.addEventListener('keydown', this.handleKeyDown)
 
}



componentWillUnmount() {
    document.removeEventListener("keydown",this.handleKeyDown );
    console.log("willunmount")
}
    render(){
if(this.state.path != ""){
  return <Redirect to={this.state.path}/>
}
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
              <p> <span> BINDINGS:</span> Snowboard bindings should be selected for the specific board.
                 Recommended soft bindings for soft boards and vice versa - hard to hard.
              </p>
            </div>
            </section>
            <span onMouseEnter={this.linkApear1} onMouseLeave={this.linkDisapear} className="goTo freerideToFreestyle">
            {this.state.render1=== true && <NavLink className="link_goto link_toFreestyle" exact to="/freestyle">Go to Freestyle</NavLink> }
            </span>
            <span onMouseEnter={this.linkApear2} onMouseLeave={this.linkDisapear} className="goTo freerideToShop">
            {this.state.render2=== true && <NavLink className="link_goto link_toShop" exact to="/shop">Go to Shop</NavLink> }
            </span>
            <span onMouseEnter={this.linkApear3} onMouseLeave={this.linkDisapear} className="goTo freerideToBeginner">
            {this.state.render3=== true && <NavLink className="link_goto link_toBeginner" exact to="/beginner">Go to Beginner</NavLink> }
            </span>
            <SkipIntro colorclass="beginner"/>
            </section>
      )
    }
  }

  export default FreeridePage;