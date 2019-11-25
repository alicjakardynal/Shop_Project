import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./../sass/style.scss"; // adres do głównego pliku SASS

class StartingPage extends Component {
  render() {
    return (
      <>
        <section className="welcoming-page">
          <Background />
          <SkipIntro/>
        </section>
      </>
    );
  }
}

class Background extends Component {
  render() {
    return (
      <>
        <div className="snow-is-falling">
          <div className="snow snow--mid"></div>
          <div className="snow snow--mid snow--alt"></div>
          <div className="snow snow--far"></div>
          <div className="snow snow--far snow--alt"></div>
        </div>
        <div className="snowboarder"></div>
      </>
    );
  }
}
class SkipIntro extends Component {

    handleSkipButton = (e) => {
        e.preventDefault();
      //tutaj muszę zeslajdować całą section w lewo i usunąc i pojawia się strona sklepu
      console.log("działą")
    }
  render() {
    return (
    <>
      <button onClick={this.handleSkipButton} className="skip_btn">Skip Intro
      <div className="skip_btn_horizontal"></div>
      <div className="skip_btn_vertical"></div>
      </button>
      </>
    );
  }
}

class App extends Component {
  render() {
    return <StartingPage />;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.getElementById("app"));
});
