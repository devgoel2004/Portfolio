import React from "react";

const Service = () => {
  return (
    <>
      <section id="service" className="service section">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Services</h2>
            </div>
          </div>
          <div className="row">
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-mobile-alt"></i>
                </div>
                <h4>Web Design</h4>
                <p>
                  I possess strong web design skills using Canvas for creating
                  interactive graphics and animations, as well as Figma for
                  designing user interfaces and prototyping. My experience with
                  these tools enables me to create visually appealing and
                  user-centric designs that enhance the overall user
                  experience.Additionally, I focus on ensuring seamless
                  navigation and engagement through intuitive and aesthetically
                  pleasing interfaces.
                </p>
              </div>
            </div>
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-laptop-code"></i>
                </div>
                <h4>Web Developement</h4>
                <p>
                  I specialize in web development with a strong proficiency in
                  React for building dynamic user interfaces and Node.js for
                  server-side development. My expertise extends to TypeScript,
                  ensuring type-safe code and robust applications. I am adept at
                  using Docker for containerization and Kubernetes for
                  orchestrating containerized applications. Additionally, I have
                  a solid understanding of databases, both SQL and NoSQL.
                </p>
              </div>
            </div>
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-code"></i>
                </div>
                <h4>Data Structures</h4>
                <p>
                  I began my journey in Data Structures and Algorithms by
                  mastering the basics through online tutorials and courses.
                  With consistent practice and problem-solving on LeetCode, I
                  achieved a top 7% ranking. On Codeforces, I participated in
                  regular contests to earn Pupil status, and on CodeChef, I
                  reached a rating of 1765, showcasing my competitive
                  programming skills and dedication to continuous improvement.
                </p>
              </div>
            </div>
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-search"></i>
                </div>
                <h4>Anroid Development</h4>
                <p>
                  I encompass building and managing component-based
                  architectures using JSX and styling components effectively. I
                  handle state management with React's built-in features and
                  libraries like Redux or Context API. I implement navigation
                  and routing with tools like React Navigation, and manage API
                  interactions using Axios or Fetch. I am proficient in local
                  data management with AsyncStorage or SQLite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
