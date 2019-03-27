import React, { Component } from "react";
import "./App.css";
import ListItem from "./ListItem";
import { data } from "./data";

class App extends Component {
  render() {
    return (
      <div>
        {/* <input id="cur-page" type="number" value="1" /> */}
        <ul id="people">
          {data.map(item => <ListItem dataItem={item} />)}
        </ul>
      </div>
    );
  }
}

export default App;
