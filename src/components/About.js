import React from "react";
import "./style/About.css";

const About = () => {
  return (
    <div className="mainabout">
      <div className="leftabt">
        <img
          id="dp"
          src="https://media.licdn.com/dms/image/D4D03AQFDnUelWVCEgQ/profile-displayphoto-shrink_800_800/0/1684000916019?e=1700697600&v=beta&t=ru3WhMYXogMQGEa5a5gd6S4I8qXtHLDcRG66Q3RRHJ8"
        />
      </div>
      <div className="rightabt">
        <h1>About Me</h1>
        <h3>My Introduction</h3>
        <div className="details">
          <h4>Experience</h4>
          <p>
            Over the past 1.5 years, I worked as a React Developer in GrowSoft
            contributing to the development and enhancement of web applications
            using the React. I held a versatile role where I served as a
            frontend developer. On the frontend, I worked with React Js, HTML,
            CSS, and JavaScript to create user-friendly and responsive
            interfaces.
          </p>

          <h4>Projects</h4>
          <h6>10+</h6>
          <h4>Education</h4>
          <h6>B.Sc Computer Science</h6>
        </div>
        <a href="https://drive.google.com/uc?export=download&id=15qd9TT3MlsVUSWw7JMWAg4zbT7Nrx67h">
          <button className="down">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default About;
