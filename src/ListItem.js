import React, { Component } from "react";

export default class ListItem extends Component {
  onClick() {
    this.props.clickHandler(this.props.dataItem);
  }
  render() {
    const { dataItem } = this.props;
    return (
      <li>
        <div className="company">{dataItem.company}</div>
        <div className="balance">{dataItem.balance}</div>
        <div className="picture" onClick={this.onClick.bind(this)}>
          <img alt="" src={dataItem.picture} />
        </div>
      </li>
    );
  }
}
