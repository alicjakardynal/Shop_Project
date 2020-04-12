import React, { Component }  from 'react';

class IntroText extends Component{
    constructor(props){
      super(props);
      this.state= {
        text: this.props.text,
        length:1
      }
    }
  
  
    componentDidMount() {
      this.interval = setInterval(() => {
          this.setState({
              length: this.state.length + 1
          });
          if(this.state.length === this.state.text.length) {
              clearInterval(this.interval);
          }
      }, 60);
  }
    componentWillUnmount() {
      clearInterval(this.interval);
  }
  
  render(){
    return <><div className="intro_text"><div className="intro_text"><h1>{this.state.text.substring(0, this.state.length)}</h1></div></div></>
  }
    }
  

export default IntroText;