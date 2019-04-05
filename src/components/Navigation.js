import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav className="navigation" id="myNav">
        <a className="active" href="/">
          О Компании{" "}
        </a>
        <a href="/">Вакансии</a>
        <a href="/">Контакты</a>
        <a href="/">Клиенты</a>
        <a className="icon" href="/">
          <div className="fa fa-bars" />
        </a>
      </nav>
    );
  }
}
