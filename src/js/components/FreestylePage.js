import React, { Component }  from 'react';
import { NavLink,Redirect } from "react-router-dom";
import SkipIntro from "./SkipIntro";

class FreestylePage extends Component{
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
                 path:"/freeride"
               })
             
                 break;
             }
         case 39:
             {
               this.setState({
                 path:"/shop"
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
  
    render() {
      if(this.state.path != ""){
        return <Redirect to={this.state.path}/>
      }
      return ( 
        <section className="firstView">
          <div className="snowboard_gif freestyle_gif"></div>
          <section className="slide freestyle_slide">
          <div className="beginner-text">
            <h1>Freestyle Rider</h1>
            <p>
              <span>SNOWBOARD:</span> Recommended type - Freestyle - these are usually soft boards in the shape of a double tip 
              that work well in a snowpark.<br></br><br></br>Jibbing - boards slightly shorter, usually have a few degrees raised edges,
               which makes it easier to slide along handrails and walls.</p>
            <p> <span>SHOES:</span> Recommended a hardness from 1 to 4 in softness FLEX scale.</p>
            <p> <span> BINDINGS:</span> Snowboard bindings should be selected for the specific board.
               Recommended soft bindings for soft boards and vice versa - hard to hard.
            </p>
          </div>
          </section>
          <span onMouseEnter={this.linkApear1} data-index="1"onMouseLeave={this.linkDisapear} className="goTo freestyleToFreeride">
          {this.state.render1=== true && <NavLink className="link_goto link_toFreeride fromFreestyle" exact to="/freeride">Go to Freeride</NavLink> }
          </span>
          <span onMouseEnter={this.linkApear2} onMouseLeave={this.linkDisapear} className="goTo freestyleToShop">
          {this.state.render2=== true && <NavLink className="link_goto link_toShop fromFreestyle" exact to="/shop">Go to Shop</NavLink> }
          </span>
          <span onMouseEnter={this.linkApear3} onMouseLeave={this.linkDisapear} className="goTo freestyleToBeginner">
          {this.state.render3=== true && <NavLink className="link_goto link_toBeginner fromFreestyle" exact to="/beginner">Go to Beginner</NavLink> }
          </span>
          <SkipIntro colorclass="beginner"/>
          </section>
       
      );
    }
  }
  
  export default FreestylePage;