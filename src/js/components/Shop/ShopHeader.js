import React, { Component }  from 'react';
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

class ShopHeader extends Component {
    state = {
      headerScrolledPosition: 0,
    };
  
    componentDidMount() {
      window.addEventListener("scroll", () => {
        let scrol = window.pageYOffset;
        if (scrol !== 0) {
          this.setState({
            headerScrolledPosition: 1,
          });
        } else {
          this.setState({
            headerScrolledPosition: 0,
          });
        }
      });
    }
  
    render() {
      const { items } = this.props;
      return (
        <div
          className={
            this.state.headerScrolledPosition === 0
              ? "shop_header"
              : "shop_header change_back_color"
          }
        >
          <Navigation />
          <AccountStripe items={this.props.items} />
        </div>
      );
    }
  }


  class Navigation extends Component {
    render() {
      return (
        <div className="container_nav">
          <div>
            <Link
              className="link below"
              to="start"
              spy={true}
              smooth={true}
              duration={700}
            >
              <NavLink className="title" exact to="/shop">
                <h2>SO!</h2>
                <h2>SNOW</h2>
              </NavLink>
            </Link>
          </div>
          <div className="navigation">
            <ul>
              <li>
                <NavLink className="navigation_options" exact to="/snowboards">
                  Snowboards
                </NavLink>
              </li>
              <li>
                <NavLink className="navigation_options" exact to="/shoes">
                  Shoes
                </NavLink>
              </li>
              <li>
                <NavLink className="navigation_options" exact to="/bindings">
                  Bindings
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }
  
  class AccountStripe extends Component {
    state = {
      pageScrolled: false,
    };
    render() {
      const { items } = this.props;
      return (
        <section className="entering_stripe">
          <div>
            <Account />
            <NavLink exact to="/basket">
              <i className="fas fa-shopping-basket">
                <span>({items.length})</span>
              </i>
            </NavLink>
          </div>
        </section>
      );
    }
  }
  
  class Account extends Component {
    render() {
      return <i className="far fa-user account"> Account</i>;
    }
  }
  export default ShopHeader;