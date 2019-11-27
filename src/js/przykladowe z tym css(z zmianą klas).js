import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./../sass/style.scss"; // adres do głównego pliku SASS
import IntroText from "./components/IntroText";
import Background from "./components/Background";

class StartingPage extends Component {
  state = {
    view: "welcoming-page"
  };
  changeView = currentView => {
    this.setState({
      view: currentView
    });
  };

  render() {
    let view = "";
    if (this.state.view === "welcoming-page") {
      view = <Welcome onButton={this.changeView} />;
    } else if (this.state.view === "beginner") {
      view = <BeginnerPage onButton={this.changeView} />;
    } else if (this.state.view === "intermediate") {
      view = <IntermediatePage onButton={this.changeView} />;
    }
    return view;
  }
}

class Welcome extends Component {
  render() {
    const { onButton } = this.props;
    return (
      <section className="welcoming-page">
        <Background />
        <SkipIntro />
        <IntroText text="Hi ! Choose if You are:" />
        <ChooseOptions onButton={onButton} />
      </section>
    );
  }
}

class BeginnerPage extends Component {
  render() {
    const { onButton } = this.props;
    return (
      <>
        <section className="slide">
          <SkipIntro />
        </section>
      </>
    );
  }
}
class IntermediatePage extends Component {
  render() {
    return (
      <>
        <SkipIntro />
        <h1>intermediate</h1>
      </>
    );
  }
}

class SkipIntro extends Component {
  handleSkipButton = e => {
    e.preventDefault();
    
  };
  render() {
    return (
      <>
        <button onClick={this.handleSkipButton} className="skip_btn">
          Skip Intro
          <div className="skip_btn_horizontal"></div>
          <div className="skip_btn_vertical"></div>
        </button>
      </>
    );
  }
}
class ChooseOptions extends Component {
  render() {
    const { onButton } = this.props;
    return (
      <>
        <div className="intro_btn_position">
          <BegginerButton onBeginnerButton={onButton} />
          <IntermediateButton onIntermediateButton={onButton} />
        </div>
      </>
    );
  }
}

class BegginerButton extends Component {

  handleBegginerBtn = () => {
    if (typeof this.props.onBeginnerButton === "function") {
      this.props.onBeginnerButton("beginner");
    }
  };
  render() {
    return (
      <>
        <div className="shape_for_text">
          <button className="beginner_btn" onClick={this.handleBegginerBtn}>
            Beginner
          </button>
        </div>
      </>
    );
  }
}

class IntermediateButton extends Component {

  handleIntermediateBtn = () => {
    if (typeof this.props.onIntermediateButton === "function") {
      this.props.onIntermediateButton("intermediate");
    }
  };
  render() {
    return (
      <>
        <div className="shape_for_text">
          <button
            className="intermediate_btn"
            onClick={this.handleIntermediateBtn}
          >
            More than Beginner
          </button>
        </div>
      </>
    );
  }
}

class App extends Component {
  render() {
    return (
      <>
        <StartingPage />
      </>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.getElementById("app"));
});
