import React from "react";
import Chat from "../../images/Chat.png";
import Restaurant from "../../images/Restaurant.png";
import Task from "../../images/Task.png";
import Stack from "../../images/Stack.png";
import { Link } from "react-router-dom";
import ShopFusion from "../../images/ShopFusion.png";
import Weather from "../../images/Weather.png";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="section portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-heading">
              <h2>My Last Projects :</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-item padd-15 flip-card">
            <div className="portfolio-item-inner shadow-dark flip-card-inner">
              <div className="portfolio-img flip-card-front">
                <img src={ShopFusion} alt="" />
              </div>
              <div className="flip-card-back">
                <h1 style={{ fontSize: "1.4rem" }}>ShopFusion</h1>
                <h2 style={{ fontSize: "1.1rem" }}>
                  (Smart E-Commerce Platform)
                </h2>
                <p style={{ fontSize: "0.8rem" }}>
                  <b>Technology Used:</b> Node. js, React, Razorpay, Cloudinary,
                  Redux
                  <ul style={{ listStyle: "circle" }}>
                    <li>
                      This project leverages Redux for efficient state
                      management, jsonwebtoken for secure authentication.
                    </li>
                    <li>
                      For email functionalities, I utilise nodemailer, enabling
                      effective communication with users.
                    </li>
                    <li>
                      Additionally, the integration of Razorpay facilitates
                      seamless and secure payment processing.
                    </li>
                  </ul>
                </p>
                <p>
                  <Link
                    to="https://github.com/devgoel2004/E-commerce-Website"
                    style={{ marginRight: "1rem" }}>
                    <i class="fa-brands fa-github"></i>
                  </Link>
                  <Link to="https://devgoel2004.github.io/shopfusion/">
                    <i class="fa-solid fa-globe"></i>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio-item padd-15 flip-card">
            <div className="portfolio-item-inner shadow-dark flip-card-inner">
              <div className="portfolio-img flip-card-front">
                <img src={Stack} alt="" />
              </div>
              <div className="flip-card-back">
                <h1 style={{ fontSize: "1.4rem" }}>QueryHub</h1>
                <h2 style={{ fontSize: "1.1rem" }}>
                  (The Ultimate Developer Q&A Platform)
                </h2>
                <p style={{ fontSize: "0.8rem" }}>
                  <b>Technology Used:</b> Node. js, React, Redux Thunk, Vercel,
                  Nodemailer
                  <ul style={{ listStyle: "circle" }}>
                    <li>
                      This project leverages Redux for efficient state
                      management, jsonwebtoken for secure authentication.
                    </li>
                    <li>
                      ReduxThunk for managing asynchronous state updates
                      efficiently, ensure smooth data flow within the webapp.
                    </li>
                    <li>
                      Vercel for offering fast, reliable, and scalable
                      deployment
                    </li>
                  </ul>
                </p>
                <p>
                  <Link
                    to="https://github.com/devgoel2004/StackOverFlow"
                    style={{ marginRight: "1rem" }}>
                    <i class="fa-brands fa-github"></i>
                  </Link>
                  <Link to="https://devgoel2004.github.io/stackoverflow-frontend/">
                    <i class="fa-solid fa-globe"></i>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio-item padd-15 flip-card">
            <div className="portfolio-item-inner shadow-dark flip-card-inner">
              <div className="portfolio-img flip-card-front">
                <img src={Task} alt="" />
              </div>
              <div className="flip-card-back">
                <h1 style={{ fontSize: "1.4rem" }}>TaskMaster</h1>
                <h2 style={{ fontSize: "1.1rem" }}>
                  (Streamlined Task Management System)
                </h2>
                <p style={{ fontSize: "0.8rem" }}>
                  <b>Technology Used:</b> Node. js, React, Tailwind, Git &
                  Github,
                  <ul style={{ listStyle: "circle" }}>
                    <li>
                      Tailwind for utilizing the utility-first CSS framework to
                      create a clean, modern, and responsive user interface with
                      ease.
                    </li>
                    <li>
                      Leveraging GitHub's powerful version control and
                      collaboration tools, allows seamless code sharing.
                    </li>
                    <li>
                      Netlify for offering fast, reliable, and scalable
                      deployment
                    </li>
                  </ul>
                </p>
                <p>
                  <Link
                    to="https://github.com/devgoel2004/Task-Manager"
                    style={{ marginRight: "1rem" }}>
                    <i class="fa-brands fa-github"></i>
                  </Link>
                  <Link to="https://659c322c6d472003f54a9ee0--storied-druid-319f98.netlify.app/signup">
                    <i class="fa-solid fa-globe"></i>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio-item padd-15 flip-card">
            <div className="portfolio-item-inner shadow-dark flip-card-inner">
              <div className="portfolio-img flip-card-front">
                <img src={Chat} alt="" />
              </div>
              <div className="flip-card-back">
                <h1 style={{ fontSize: "1.4rem" }}>Talk-A-Tive</h1>
                <h2 style={{ fontSize: "1.1rem" }}>
                  (Seamless Messaging Solution)
                </h2>
                <p style={{ fontSize: "0.8rem" }}>
                  <b>Technology Used:</b> Node. js, React, Vercel, SocketIO, Git
                  & Github,
                  <ul style={{ listStyle: "circle" }}>
                    <li>
                      Socket.IO is a used in chat applications to enables
                      real-time messaging, bidirectional communication between
                      clients and servers.
                    </li>
                    <li>
                      Leveraging GitHub's powerful version control and
                      collaboration tools, allows seamless code sharing.
                    </li>
                    <li>
                      Vercel for offering fast, reliable, and scalable
                      deployment
                    </li>
                  </ul>
                </p>
                <p>
                  <Link
                    to="https://github.com/devgoel2004/Chat-App"
                    style={{ marginRight: "1rem" }}>
                    <i class="fa-brands fa-github"></i>
                  </Link>
                  <Link to="https://talk-a-tive-7fgq.onrender.com/chats">
                    <i class="fa-solid fa-globe"></i>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio-item padd-15 flip-card">
            <div className="portfolio-item-inner shadow-dark flip-card-inner">
              <div className="portfolio-img flip-card-front">
                <img src={Weather} alt="" />
              </div>
              <div className="flip-card-back">
                <h1 style={{ fontSize: "1.4rem" }}>ClimateCast</h1>
                <h2 style={{ fontSize: "1.1rem" }}>
                  (Your Ultimate Weather Companion)
                </h2>
                <p style={{ fontSize: "0.8rem" }}>
                  <b>Technology Used:</b> React, Openweathermap, Git & Github,
                  <ul style={{ listStyle: "circle" }}>
                    <li>
                      React ensuring a dynamic and responsive user interface for
                      a seamless user experience.
                    </li>
                    <li>
                      Leveraging GitHub's powerful version control and
                      collaboration tools, allows seamless code sharing.
                    </li>
                    <li>
                      OpenWeatherMap API provides current weather data for any
                      location in the world, includes temperature, humidity,
                      wind speed, and more.
                    </li>
                  </ul>
                </p>
                <p>
                  <Link
                    to="https://github.com/devgoel2004/weather-app-react"
                    style={{ marginRight: "1rem" }}>
                    <i class="fa-brands fa-github"></i>
                  </Link>
                  <Link to="https://devgoel2004.github.io/weather-app-react/">
                    <i class="fa-solid fa-globe"></i>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio-item padd-15 flip-card">
            <div className="portfolio-item-inner shadow-dark flip-card-inner">
              <div className="portfolio-img flip-card-front">
                <img src={Restaurant} alt="" />
              </div>
              <div className="flip-card-back">
                <h1 style={{ fontSize: "1.4rem" }}>The Originals</h1>
                <h2 style={{ fontSize: "1.1rem" }}>
                  (Your Ultimate Dining Experience)
                </h2>
                <p style={{ fontSize: "0.8rem" }}>
                  <b>Technology Used:</b> HTML, CSS, JavaScript, Git & Github
                  <ul style={{ listStyle: "circle" }}>
                    <li>
                      JavaScript adds interactive elements to your website, such
                      as form validations, dynamic content updates, and user
                      interactions
                    </li>
                    <li>
                      Leveraging GitHub's powerful version control and
                      collaboration tools, allows seamless code sharing.
                    </li>
                    <li>
                      HTML provides the fundamental structure of your website.
                      CSS is used to style and layout the HTML elements
                    </li>
                  </ul>
                </p>
                <p>
                  <Link
                    to="https://github.com/devgoel2004/Restaurant-Website"
                    style={{ marginRight: "1rem" }}>
                    <i class="fa-brands fa-github"></i>
                  </Link>
                  <Link to="https://devgoel2004.github.io/Restaurant-Website/">
                    <i class="fa-solid fa-globe"></i>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
