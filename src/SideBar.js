import React, { Component } from "react";

export class SideBar extends Component {
  render() {
    console.log(this.props);
    return (
      <div id="sidebar">
        <img alt="" src={this.props.activeItem.picture} />
      </div>
    );
  }
}
