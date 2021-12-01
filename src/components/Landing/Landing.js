import React from "react";
import "./Landing.css";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="Landing">
      <div className="heroContents">
        <h1>Hi, I'm James Schnebly</h1>
        <h2>Full Stack Developer</h2>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <a
            href="https://www.linkedin.com/in/schnebly/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub color="black" className="icon" />
          </a>
          <a
            href="https://www.github.com/schnebly"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin color="black" className="icon" />
          </a>
          <a
            href="https://medium.com/@jameschnebly"
            target="_blank"
            rel="noreferrer"
          >
            <FaMedium color="black" className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
