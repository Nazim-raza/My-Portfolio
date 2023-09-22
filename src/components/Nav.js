import "./style/Nav.css";
import React, { useState } from "react";

const Nav = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div>
      <div
        id="myTopnav"
        className={`topnav${isResponsive ? " responsive" : ""}`}>
        <a href="#home" className="active">
          Nazim Raza
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/skills">Skills</a>
        <a href="/project">Project</a>
        <a href="/contact">Contact</a>
        <a
          href="javascript:void(0);"
          className="icon"
          onClick={toggleResponsive}>
          <i className="fa fa-bars" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
