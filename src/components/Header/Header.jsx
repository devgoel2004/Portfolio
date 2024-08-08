import React from "react";
const Header = () => {
  return (
    <>
      <div className="main-container">
        <div className="aside">
          <div className="logo">
            <a href="#">
              <span>D</span>evpolio
            </a>
          </div>
          <div className="nav-hrefggler">
            <span></span>
          </div>
          <ul className="nav">
            <li>
              <a href="#home" className="active">
                <i className="fa fa-home"></i>Home
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="fa fa-user"></i>About
              </a>
            </li>
            <li>
              <a href="#service">
                <i className="fa fa-list"></i>Services
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <i className="fa fa-briefcase"></i>Portfolio
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="fa fa-comments"></i>Contacts
              </a>
            </li>
            <li>
              <a href="#icons">
                <i className="fa fa-search"></i>Find Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
