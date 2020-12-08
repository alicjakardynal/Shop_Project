import React, { Component }  from 'react';


class Filters extends Component {
    state = {
      whatClicked: "",
    };
  
    handleBtn = (filter) => {
      if (filter === "freestyle") {
        this.setState({
          whatClicked: filter,
        });
        this.props.loadFreestyle();
      } else if (filter === "freeride") {
        this.setState({
          whatClicked: filter,
        });
        this.props.loadFreeride();
      } else {
        this.setState({
          whatClicked: "all",
        });
        this.props.loadAll();
      }
    };
  
    render() {
      return (
        <div className="filters">
          <h2>Filters</h2>
          <div
            onClick={() => this.handleBtn("freestyle")}
            className={
              this.state.whatClicked === "freestyle"
                ? "btn lines_effect btn_clicked"
                : "btn lines_effect"
            }
          >
            Freestyle
          </div>
          <div
            onClick={() => this.handleBtn("freeride")}
            className={
              this.state.whatClicked === "freeride"
                ? "btn lines_effect btn_clicked"
                : "btn lines_effect"
            }
          >
            Freeride
          </div>
          <div
            onClick={() => this.handleBtn("all")}
            className={
              this.state.whatClicked === "all"
                ? "btn lines_effect btn_clicked"
                : "btn lines_effect"
            }
          >
            All
          </div>
        </div>
      );
    }
  }
  
  

export default Filters;