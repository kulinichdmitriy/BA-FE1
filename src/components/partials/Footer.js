import React, { Component } from "react";
import "./Footer.scss";
import { Navigation } from "../Navigation";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <img alt="" className="footer-logo" src="images/logo.png" />
        <div className="footer-links">
          <a className="active" href="/">
            О Компании
          </a>
          <a className="not-active" href="/">
            Вакансии
          </a>
          <a className="not-active" href="/">
            Контакты
          </a>
          <a className="not-active" href="/">
            Клиенты
          </a>
        </div>
        <Navigation />
      </footer>
    );
  }
}
