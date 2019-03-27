import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    console.log(this);
    const { dataItem } = this.props;
    console.log(dataItem);
    return (
      <li>
        <div className="company">{dataItem.company}</div>
        <div className="balance">{dataItem.balance}</div>
        <div className="picture">
          <img alt="" src={dataItem.picture} />
        </div>
      </li>
    );
  }
}
