import React, { Component } from "react";
import Info from "./ErrorMsg";

export default class Handler extends Component {

constructor() {
    super();
    this.state = {
      name: "React",
      ShowHideDemo1: false
    }
    this.hideComponent = this.hideComponent.bind(this);
  }


  hideComponent(name) {
    switch (name) {
      case "showHideDemo1":
        this.setState({showHideDemo1: !this.state.showHideDemo1}); 
        break;
      default:
    }
  }
  render() {
    const { showHideDemo1 } = this.state;
    return (
      <div>
        {showHideDemo1 && <Info />}
        <div>
          <button onClick={() => this.hideComponent("showHideDemo1")}>
            Click for a hint!
          </button>
        </div>
      </div>
    );
  }

}


