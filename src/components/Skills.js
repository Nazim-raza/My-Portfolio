import React from "react";
import "./style/Skills.css";

const Skills = () => {
  return (
    <div className="mainskl">
      <div className="leftskl">
        <h2 className="fend">Frontend Developer</h2>
        <ul id="skllist">
          <li>React Js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="rightskl">
        <h2 className="fend">Other</h2>
        <ul id="skllist">
          <li>Java</li>
          <li>GitHub</li>
          <li>MERN</li>
          <li>Adobe Illustrator</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
