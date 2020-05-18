import React, { Component }  from 'react';

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

  export default Background;