import React from "react";
import "./style/Project.css";

const Project = () => {
  return (
    <div className="mainpro">
      <h2>My Work</h2>
      <div className="updiv">
        <div className="leftpro">
          <h4>TextUtilizer Web App</h4>
          <img id="p1" src="./images/Textutilizer Dark.png" />
          <a href="https://nazim-raza.github.io/TextUtilizer/">
            <button className="button">Live Demo</button>
          </a>
        </div>
        <div className="midpro">
          <h4 className="">iNoteBook-Notes App</h4>
          <img id="p1" src="./images/Inotebook.png" />
          <a href="https://inotebook-client.vercel.app/">
            <button className="button">Live Demo</button>
          </a>
        </div>
        <div className="rightpro">
          <h4 className="">Pet-Vet Website</h4>
          <img id="p1" src="./images/Pet-vet.png" />
          <a href="https://pet-vet-shop.vercel.app/">
            <button className="button">Live Demo</button>
          </a>
        </div>
      </div>
      <div className="lowdiv">
        <div className="leftpro">
          <h4 className="">Job-Portal</h4>
          <img id="p1" src="./images/Job portal.png" />
          <a href="https://job-portal0.netlify.app/">
            <button className="button">Live Demo</button>
          </a>
        </div>
        <div className="midpro">
          <h4 className="">Enrollment From</h4>
          <img id="p1" src="./images/Enrollment-Form.png" />
          <a href="https://enrollment-form-nr.netlify.app/">
            <button className="button">Live Demo</button>
          </a>
        </div>
        <div className="rightpro">
          <h4 className="">To-Do App</h4>
          <img id="p1" src="./images/Todo app.png" />
          <a href="https://todo-list-ten-gamma.vercel.app/">
            <button className="button">Live Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
