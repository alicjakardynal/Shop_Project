
import React, { Component }  from 'react';

class Footer extends Component {
    render() {
      return (
        <>
          <div className="footer">
            <div className="newsletter">
              <h3>Newsletter</h3>
              <p>Sign to our newsletter to get all best news and prices</p>
              <form>
                <input
                  className="email"
                  type="email"
                  placeholder="Write your email"
                ></input>
                <input className="submit" type="submit" value="Send"></input>
              </form>
            </div>
            <div className="footer_info">
              <div>
                <h3>Contact</h3>
                <p>
                  <i className="fas fa-phone"></i>xxx xxx xxx
                </p>
                <p>
                  <i className="fas fa-envelope-open-text"></i>xxx@gmail.com
                </p>
              </div>
              <div>
                <p>Delivery Options</p>
                <p>Return Policy</p>
                <p>Store Locations</p>
                <p>Help & FAQs</p>
              </div>
              <div>
                <h3>SO!</h3>
                <h3>SNOW</h3>
                <div>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-youtube"></i>
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  export default Footer;