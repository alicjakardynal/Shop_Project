import React, { Component }  from 'react';
import { NavLink, Redirect } from "react-router-dom";
import SkipIntro from "./SkipIntro";

class BeginnerPage extends Component {
    state={
      render: false,
      path:""
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
  handleKeyDown =(event)=>{
    switch (event.which) {
          
           case 39:
               {
                 this.setState({
                   path:"/intermediate"
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
          <div className="snowboard_gif"></div>
          <section className="slide">
          <div className="beginner-text">
          <h1>Beginner Rider</h1>
            <p>
              <span>SNOWBOARD:</span> Recommended type -        All Mountain - category of the most universal boards.<br></br>1-4 in softness FLEX scale</p>
            <p> <span>SHOES:</span> Recommended a hardness from 1 to 4 in softness FLEX scale.</p>
            <p> <span> BINDINGS:</span> Snowboard bindings should be selected for the specific board.
               Recommended soft bindings for soft boards and vice versa - hard to hard.
            </p>
          </div>
          </section>
          <span onMouseEnter={this.linkApear} onMouseLeave={this.linkDisapear} className="goToIntermediate">
          {this.state.render=== true && <NavLink className="link_intermediate" exact to="/intermediate">Go to Intermediate</NavLink> }
          </span>
          <SkipIntro colorclass="beginner"/>
          </section>
       
      );
    }
  }

  export default BeginnerPage;