import React, { Component }  from 'react';
import Fade from "react-reveal/Fade";
  
  class Articles extends Component {
    render() {
      return (
        <>
          <section className="background_for_articles">
            <div className="first_article">
              <Fade left>
                <div className="header_for_articles">
                  <h2>Check the best places to ride</h2>
                </div>
              </Fade>
              <Fade right>
                <div className="img_desert"></div>
              </Fade>
            </div>
            <div className="second_article">
              <Fade left>
                <div className="img_snowboard"></div>
              </Fade>
              <Fade right>
                <div className="header_for_articles">
                  <h2>Check how to take care of your equipment</h2>
                </div>
              </Fade>
            </div>
          </section>
        </>
      );
    }
  }

  export default Articles