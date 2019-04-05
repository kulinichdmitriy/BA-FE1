import React, { Component } from "react";
import "./App.scss";
import { Header } from "./components/partials/Header";
import { Footer } from "./components/partials/Footer";
// import { SideBar } from "./SideBar";
// import ListItem from "./ListItem";
// import { data } from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: false
    };
  }
  clickHandler(listItemData) {
    this.setState({
      activeItem: listItemData
    });
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="line-separator"> </div>
        <section className="topimage">
          <div className="topimgtext">
            <h1>ЭКСПОЦЕНТР</h1>
            <p>Выставочный стенд компании "Test" на выставке ЭКСПО-2016 </p>
          </div>
        </section>
        <section className="blue-section">
          <div className="text-row">
            <div className="text-vario">
              <h1>VARIO-EXPO systems</h1>
            </div>
            <div className="text-vario-rus">
              <h3>- ИНДИВИДУАЛЬНОЕ СТРОИТЕЛЬСТВО ВЫСТАВОЧНЫХ СТЕНДОВ.</h3>
            </div>
          </div>
          <div className="container-text-top">
            <article className="paragraph1">
              <p className="line">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute.
              </p>
            </article>
            <article className="paragraph2">
              <p className="line">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute.
              </p>
            </article>
          </div>
        </section>
        <section className="services">
          <div className="servicebox">
            <img
              alt=""
              src="https://image.flaticon.com/icons/svg/683/683464.svg"
            />
            <h1>ПРОЕКТИРОВАНИЕ</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt
            </p>
          </div>
          <div className="servicebox">
            <img
              alt=""
              src="https://image.flaticon.com/icons/svg/683/683467.svg"
            />
            <h1>СТРОИТЕЛЬСТВО</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt
            </p>
          </div>
          <div className="servicebox">
            <img
              alt=""
              src="https://image.flaticon.com/icons/svg/683/683465.svg"
            />
            <h1>АРЕНДА</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt
            </p>
          </div>
        </section>
        <section className="images">
          <div className="imagebox">
            <img alt="" className="images-img" src="images/test.jpg" />
            <button className="btn">A+B Collection</button>
          </div>
          <div className="imagebox">
            <img alt="" className="images-img" src="images/test1.jpg" />
            <button className="btn">Division Group</button>
          </div>
          <div className="imagebox">
            <img alt="" className="images-img" src="images/test.jpg" />
            <button className="btn">Cork Centre</button>
          </div>
          <div className="imagebox">
            <img alt="" className="images-img" src="images/test2.jpg" />
            <button className="btn">ForMyDogs</button>
          </div>
        </section>
        <section className="bottom-section">
          <div className="clients">
            <div className="text-row">
              <div className="text1">
                <h1>Наши Клиенты</h1>
              </div>
              <div className="text_link">
                <a href="/">Показать всех</a>
              </div>
            </div>
            <div className="img-row">
              {" "}
              <img alt="" src="images/test1.jpg" />
              <img alt="" src="images/test.jpg" />
              <img alt="" src="images/test2.jpg" />
              <img alt="" src="images/test.jpg" />
              <img alt="" src="images/test1.jpg" />
              <img alt="" src="images/test.jpg" />
              <img alt="" src="images/test2.jpg" />
              <img alt="" src="images/test.jpg" />
              <img alt="" src="images/test1.jpg" />
              <img alt="" src="images/test.jpg" />
              <img alt="" src="images/test2.jpg" />
              <img alt="" src="images/test.jpg" />
              <img alt="" src="images/test1.jpg" />
              <img alt="" src="images/test.jpg" />
              <img alt="" src="images/test2.jpg" />
            </div>
          </div>
          <div className="news">
            <h1>Новости</h1>
            <div className="line">
              <p>
                <a href="/">Заголовок новости</a>
                <time className="posttime" pubdate="pubdate" dateTime="">
                  01.11.2015
                </time>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            <div className="line">
              <p>
                <a href="/">Заголовок новости</a>
                <time className="posttime" pubdate="pubdate" dateTime="">
                  13.10.2015
                </time>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            <div className="line">
              <p>
                <a href="/">Заголовок новости</a>
                <time className="posttime" pubdate="pubdate" dateTime="">
                  10.11.2015
                </time>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </section>
        <div className="line-separator"> </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
