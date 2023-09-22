import React from "react";
import "./style/Home.css";

const Home = () => {
  return (
    <div>
      <div className="main">
        <div className="sidebar">
          <a href="https://www.linkedin.com/in/nazim-raza-57758a1b1">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          &nbsp;&nbsp;
          <a href="https://github.com/Nazim-raza">
            <i class="fa-brands fa-github"></i>
          </a>
          &nbsp;&nbsp;
          <a href="https://wa.me/9981693954">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <div className="left">
          <h6>Hello, welcome to my Portfolio</h6>
          <h1>Nazim Raza</h1>
          <h5>
            Fronted Web Developer, Good In React Js Basic Knowledge About MERN,
            Java, Git
          </h5>
          <a href="https://wa.me/9981693954">
            <button className="msgbtn">Message Me</button>
          </a>
        </div>
        <div className="right">
          <img
            id="dp"
            src="https://media.licdn.com/dms/image/D4D03AQFDnUelWVCEgQ/profile-displayphoto-shrink_800_800/0/1684000916019?e=1700697600&v=beta&t=ru3WhMYXogMQGEa5a5gd6S4I8qXtHLDcRG66Q3RRHJ8"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
