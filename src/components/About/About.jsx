import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section id="about" className="about section">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h3>
                    I'm Dev Goel an <span>Web Developer</span>
                  </h3>
                  <p>
                    My name is Dev Goel. I am full stack Web Developer where I
                    am skilled in HTML/CSS, Javascript, Node JS, React JS,
                    Databases, Docker and Kubernetes and skilled in Competitive
                    Programming and DSA. I am always eager to learn new things
                    and technology. I have made a restaurant website which can
                    help the restaurant and cafe to reserve seats online through
                    website. I have also made a E Commerce Website named
                    ShopFusion which aims to sell and buy products online.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Birthday: <span>12 July 2004</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Age: <span>20</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Website:{" "}
                        <span>https://devgoel2004.github.io/portfolio/</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email: <span>devgoel901@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree: <span>B.Tech (IT)</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone: <span>9690011021</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City: <span>Ghaziabad</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        For Hire: <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <Link
                        to="https://drive.google.com/file/d/1Wwihitt3Np7WEDgrWRx8e4aRwXKXhQ55/view"
                        target="_blank"
                        className="btn padd-15">
                        <FaUserAlt /> Download CV
                      </Link>
                      <Link
                        to="https://github.com/devgoel2004"
                        target="_blank"
                        className="btn padd-15">
                        <i class="fa-brands fa-github"></i> Github
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Front End</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: " 86%" }}></div>
                        <div className="skill-percent">86%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Competitive Programming</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "79%" }}></div>
                        <div className="skill-percent">79%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>DevOps</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "71%" }}></div>
                        <div className="skill-percent">71%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Back End</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: "81%" }}></div>
                        <div className="skill-percent">81%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="titleline-box padd-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2021-25
                          </h3>
                          <h4 className="timeline-title">
                            B.Tech in Information Technology
                          </h4>
                          <p className="timeline-text">
                            <ul>
                              <li>
                                • I'm pursuing B.Tech from Ajay Kumar Garg
                                Engineering College, Ghaziabad, with an average
                                score of 8.3 CGPA.
                              </li>{" "}
                              • Skilled in Web Technology (HTML, CSS,
                              JavaScript), OOPS, Data Structures and Algorithms,
                              Operating Systems (all in C++), DBMS, and Computer
                              Networks.
                            </ul>
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2020-21
                          </h3>
                          <h4 className="timeline-title">
                            class 12<sup>th</sup>
                          </h4>
                          <p className="timeline-text">
                            • I have done my schooling from Delhi Public School,
                            Meerut Road, Ghaziabad. I have scored 89.5% in my
                            class 12<sup>th</sup>.
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2018-19
                          </h3>
                          <h4 className="timeline-title">
                            class 10<sup>th</sup>
                          </h4>
                          <p className="timeline-text">
                            • I have completed my class 10<sup>th</sup> from
                            Heritage Academy, Modinagar where I have scored
                            95.2%.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience">
                  <h3 className="title">Position Of Responsibility</h3>
                  <div className="row">
                    <div className="titleline-box padd-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2022-25
                          </h3>
                          <h4 className="timeline-title">
                            Team Member, Programming Club, AKGEC
                          </h4>
                          <p className="timeline-text">
                            <ul>
                              <li>
                                • Mentored 550+ CS students in professional
                                development, technical skills, and tech
                                interests.
                              </li>
                              <li>
                                • Organized 10+ coding competitions for 200+
                                students, increasing tech engagement by 40% and
                                skill levels by 25%.
                              </li>
                              <li>
                                • Achieved top 10% in 80% of inter-college
                                coding contests on various platforms.
                              </li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
