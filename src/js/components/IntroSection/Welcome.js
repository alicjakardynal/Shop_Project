import React, { Component }  from 'react';
import Background from "../IntroSection/Background";
import SkipIntro from "../IntroSection/SkipIntro";
import IntroText from "../IntroSection/IntroText";
import ChooseOptions from "../IntroSection/ChooseOptions";

class Welcome extends Component {
    render() {
      return (
        <section className="welcoming-page">
          <Background />
          <SkipIntro />
          <IntroText text="Hi ! Choose if You are:" />
          <ChooseOptions />
        </section>
      );
    }
  }

  export default Welcome;
  