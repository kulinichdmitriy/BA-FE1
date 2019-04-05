import React, { Component } from "react";
import { Navigation } from "../Navigation";

export class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="top-logo-section">
          <div className="logo">
            <img alt="" src="images/logo.png" />
          </div>
          <div className="addresstext">
            <p>
              <a href="/">г. Москва</a>
            </p>
            <p>ул. Антонова-Евсеенко</p>
            <p>дом 15, стр.3</p>
          </div>
          <div className="phonetext">
            <div className="bordered">
              <p>ТЕЛ.</p>
              <p>
                {" "}
                <strong>+7 123-456-78-90</strong>
              </p>
              <p>
                {" "}
                <strong>+7 123 456-78-90</strong>
              </p>
            </div>
          </div>
          <div className="buttontop pulse">
            <button className="btn">
              {" "}
              <i className="fa fa-pencil fa-fw" />
              Заявка на стенд
            </button>
          </div>
        </section>
        <Navigation />
      </React.Fragment>
    );
  }
}
