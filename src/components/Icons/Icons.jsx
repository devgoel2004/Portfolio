import React from "react";
import { Link } from "react-router-dom";
import { SiCodeforces } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
const Icons = () => {
  return (
    <section
      id="icons"
      className="icons"
      style={{ display: "flex", alignItems: "center" }}>
      <div className="icons-container container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Find Me</h2>
          </div>
        </div>
        <ul>
          <li>
            <Link to="https://codeforces.com/profile/devgoel901">
              <SiCodeforces />
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/devgoel901/">
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link to="https://www.codechef.com/users/aplha_001">
              <SiCodechef />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/devgoel2004">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link to="https://www.geeksforgeeks.org/user/devgoe2s0n/">
              <SiGeeksforgeeks />
            </Link>
          </li>
          <li>
            <Link to="https://www.naukri.com/code360/profile/devgoel901">
              <SiCodingninjas />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Icons;
