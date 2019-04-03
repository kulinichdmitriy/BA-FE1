import React, { Component } from "react";
import "./App.css";
import { SideBar } from "./SideBar";
import ListItem from "./ListItem";
import { data } from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: false
    };
  }
  clickHandler(e) {
    this.setState({
      activeItem: e
    });
  }
  render() {
    return (
      <div>
        <SideBar activeItem={this.state.activeItem} />
        <ul id="people">
          {data.map(item => (
            <ListItem
              clickHandler={this.clickHandler.bind(this)}
              dataItem={item}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
