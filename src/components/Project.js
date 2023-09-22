import React from "react";
import "./style/Project.css";

const Project = () => {
  return (
    <div className="mainpro">
      <h2>My Work</h2>
      <div className="updiv">
        <div className="leftpro">
          <h4>TextUtilizer Web App</h4>
          <img
            id="p1"
            src="https://drive.google.com/uc?export=download&id=1a1r8XIvZUQIRLB_0OVdGVXG7VKgCtxto"
          />
          <a href="https://nazim-raza.github.io/TextUtilizer/">
            <button className="button">Live Demo</button>
          </a>
        </div>
        <div className="midpro">
          <h4 className="">iNoteBook-Notes App</h4>
          <img
            id="p1"
            src="https://drive.google.com/uc?export=download&id=1vcv1Aw_VsvZa3D9vhD7gqLgOQSYV34y0"
          />
          <a href="https://inotebook-client.vercel.app/">
            <button className="button">Live Demo</button>
          </a>
        </div>
        <div className="rightpro">
          <h4 className="">Pet-Vet Website</h4>
          <img
            id="p1"
            src="https://drive.google.com/uc?export=download&id=1Yr9XRlle2tM6PsNVOUTDHXba-E0MD0ml"
          />
          <a href="https://pet-vet-shop.vercel.app/">
            <button className="button">Live Demo</button>
          </a>
        </div>
      </div>
      <div className="lowdiv">
        <div className="leftpro">
          <h4 className="">Job-Portal</h4>
          <img
            id="p1"
            src="https://drive.google.com/uc?export=download&id=11PX4dXRwtEzopgK6c8LbfmhTP8jTGKSa"
          />
          <a href="https://job-portal0.netlify.app/">
            <button className="button">Live Demo</button>
          </a>
        </div>
        <div className="midpro">
          <h4 className="">Enrollment From</h4>
          <img
            id="p1"
            src="https://drive.google.com/uc?export=download&id=10FvkxpB4fcW8uTw_fVbE33PvasHgLTEH"
          />
          <a href="https://enrollment-form-nr.netlify.app/">
            <button className="button">Live Demo</button>
          </a>
        </div>
        <div className="rightpro">
          <h4 className="">To-Do App</h4>
          <img
            id="p1"
            src="https://drive.google.com/uc?export=download&id=1naek5AtEedmYhTLMKxYYb97GjG7NXwha"
          />
          <a href="https://todo-list-ten-gamma.vercel.app/">
            <button className="button">Live Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
