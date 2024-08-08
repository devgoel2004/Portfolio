import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const sendMessage = async () => {
    const form = { name, email, subject, message };
    try {
      const response = await axios.post(
        "https://portfolio-backend-avwi.onrender.com/send-email",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Message sent successfully");
    } catch (error) {
      alert("Something Error!");
    }
  };
  return (
    <div>
      <section id="contact" className="contact section">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <h3 className="contact-title padd-15">Have You Any Questions ?</h3>
          <h4 className="contact-sub-title padd-15">I' M AT YOUR SERVICES</h4>
          <div className="row">
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone"></i>
                <h4>Call Us On</h4>
                <p>+91 9690011021</p>
              </div>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker-alt"></i>
                <h4>Office</h4>
                <p>Ghaziabad</p>
              </div>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <Link to="mailto:devgoel901@gmail.com">
                  <i className="fa fa-envelope"></i>
                </Link>
                <h4>Email</h4>
                <p>
                  <Link
                    to="mailto:devgoel901@gmail.com"
                    style={{ color: "white", textDecoration: "none" }}>
                    devgoel901@gmail.com
                  </Link>{" "}
                </p>
              </div>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <Link to="https://devgoel2004.github.io/portfolio/">
                  <i className="fa fa-globe-europe"></i>
                </Link>
                <h4>Website</h4>
                <p>
                  <Link
                    to="https://devgoel2004.github.io/portfolio/"
                    style={{ color: "white", textDecoration: "none" }}>
                    https://devgoel2004.github.io/portfolio/
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
          <h4 className="contact-sub-title padd-15">
            I' M VERY RESPONSIVE TO MESSAGE
          </h4>
          <div className="row">
            <div className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      onChange={(e) => setSubject(e.target.value)}
                      className="form-control"
                      value={subject}
                      placeholder="Subject"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="fomr-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      name=""
                      className="form-control"
                      id=""
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <button
                      type="submit"
                      onClick={sendMessage}
                      style={{ marginTop: "20px" }}
                      className="btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
