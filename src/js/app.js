import React, { Component } from "react";
import ReactDOM from "react-dom";


import "./../sass/style.scss"; // adres do głównego pliku SASS
import IntroText from "./components/IntroText";
import Background from "./components/Background"


class StartingPage extends Component {
  render() {
    return (
      <>
        <section className="welcoming-page">
          <Background />
          <SkipIntro/>
          <IntroText text="Hi ! To help You with shopping, answear if You are:"/>
          <ChooseOptions/>
        </section>
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
class ChooseOptions extends Component{
  render(){
    return(
      <>
      <div className="intro_btn_position">
        <BegginerSection/>
        <IntermediateSection/>
      </div>
      </>
    )
  }
}


  class BegginerSection extends Component{
    handleBegginerBtn=()=>{

    }
    render(){
      return(
        <>
        <div className="shape_for_text">
          
<button className="beginner_btn">Beginner</button>
        </div>
        </>
      )
    }
  }

  class IntermediateSection extends Component{
    render(){
      return(
        <>
        <div className="shape_for_text">
<button className="intermediate_btn">More than Beginner</button>
        </div>
        </>
      )
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
