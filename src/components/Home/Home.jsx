import React, { useRef, useEffect } from "react";
import me from "../../images/me.jpg";
import { Link } from "react-router-dom";
import Typed from "typed.js";
const Home = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    if (el.current) {
      const options = {
        strings: ["Web Developer"],
        typeSpeed: 200,
        backSpeed: 150,
        loop: true,
      };
      typed.current = new Typed(el.current, options);
    }
    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);
  return (
    <>
      <section id="home" className="home section">
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">
                Hello, my name is <span className="name">Dev Goel</span>
              </h3>
              <h3 className="my-profession">
                I' m a <span ref={el} className="typing"></span>
              </h3>
              <p>
                I'm a Web Developer and a Competitive Programmer with extensive
                experience for over 2.5 years. My expertise is to create
                websites, which can handle the data and to develop the backend
                and frontend of the website.
              </p>
              <Link
                to="https://www.linkedin.com/in/devgoel901/"
                className="btn hire-me">
                <i class="fa-brands fa-linkedin"></i> LinkedIn
              </Link>
            </div>
            <div className="home-img padd-15">
              <img src={me} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
