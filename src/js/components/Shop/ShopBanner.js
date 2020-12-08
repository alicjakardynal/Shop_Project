import React, { Component }  from 'react';
import { HashRouter, Route, Switch, NavLink } from "react-router-dom";


  
class ShopBanner extends Component {
    state = {
      bannerScrolledPosition: 0,
    };
    componentDidMount() {
      window.addEventListener("scroll", () => {
        let scrol = window.pageYOffset;
  
        this.setState({
          bannerScrolledPosition: scrol * 0.1,
        });
      });
    }
    render() {
      return (
        <div
          name="start"
          className="banner"
          style={{ backgroundPositionY: this.state.bannerScrolledPosition }}
        >
          <NavLink className="btn_to_go_to_intro" exact to="/"><div className="circle">
              <div id="cta">
              <span class="arrow primera next "></span>
              <span class="arrow segunda next "></span>
              </div>
          </div></NavLink>
          <h2>SO!</h2>
          <h2>SNOW</h2>
          <div className="sale">
            <h1>SALE</h1>
            <h1>SALE</h1>
            <h1>SALE</h1>
            <h1>SALE</h1>
            <h1>SALE</h1>
          </div>
          <div></div>
        </div>
      );
    }
  }

  export default ShopBanner