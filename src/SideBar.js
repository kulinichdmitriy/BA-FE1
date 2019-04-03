import React, { Component } from "react";

export class SideBar extends Component {
  render() {
    
    return <div id="sidebar">
    <img src={this.props.activeItem.picture}/>
    </div>;
  }
}
