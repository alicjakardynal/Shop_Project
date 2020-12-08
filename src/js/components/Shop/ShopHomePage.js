import React, { Component }  from 'react';
import { HashRouter, Route, Switch, NavLink } from "react-router-dom";
import ShopHeader from "./ShopHeader";
import ShopBanner from "./ShopBanner";
import NotesWithIcons from "./NoteWithIcons";
import Articles from "./Articles";
import CarousselWithItems from "./CarousselWithItems";
import Footer from "./Footer";





class ShopHomePage extends Component {
    render() {
      return (
        <section className="shopView">
          <ShopHeader items={this.props.items} />
          <ShopBanner />
          <NotesWithIcons />
          <Articles />
          <CarousselWithItems
            addItems={this.props.addItems}
            changeCounter={this.props.changeCounter}
          />
          <Footer />
        </section>
      );
    }
  }



export default ShopHomePage;