import React from "react";
import "./App.css";

function App() {
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
            <img
              src="GitHub-64px.png"
              alt="Github Icon Link"
              className="icon"
            />
          </a>
          <a
            href="https://www.github.com/schnebly"
            target="_blank"
            rel="noreferrer"
          >
            <img src="linkedin.png" alt="LinkedIn Icon Link" className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
