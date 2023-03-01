import React from "react";
import "./Jsprojects.css";
import githubImg from "../assets/img/github.png";
import pf1 from "../assets/projects/project1.png";
import pf2 from "../assets/projects/project2.png";
import pf3 from "../assets/projects/project3.png";
import pf4 from "../assets/projects/project4.png";
import pf5 from "../assets/projects/project5.png";

const Jsprojects = () => {
  return (
    <div className="jsprojects">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <h2>Projects</h2>
            <br />
            <div className="js">
              <div className="row">
                <div className="col-sm-6">
                  
                    <img src={pf1} alt="github" />
                  
                  <br />
                  <a
                    href="https://github.com/warmercolor/responsive-car"
                    className="btn btn-default d-block github"
                    target="_blank"
                  >
                    Github Code <img src={githubImg} alt="github"/>
                  </a>
                </div>
                <div className="col-sm-6">
                  
                    <img src={pf2} alt="github" />
                  
                  <a
                    href="https://github.com/warmercolor/react-to-do-list"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} alt="github"/>
                  </a>
                </div>
                <div className="col-sm-6">
                  
                    <img src={pf3} alt="github" />
                  
                  <br />
                  <a
                    href="https://github.com/Jhonatas-Matheus/app_paga_pix"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} alt="github"/>
                  </a>
                </div>
                <div className="col-sm-6">
                    <img src={pf4} alt="App Paga Pix" />
                  <br />
                  <a
                    href="https://github.com/warmercolor/responsive-ecommerce-sara"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} alt="github"/>
                  </a>
                </div>
                <div className="col-sm-6">
                    <img src={pf5} alt="Project 2 Give"/>
                  <br />
                  <a
                    href="https://github.com/grupo3-daniel-m3/2Give-app"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} alt="github"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//<h2>DOM Manipulation | Javascript </h2>
//<p>
//  Local Storage / Array methods / Filters / Javascript Events / HTML
//  Forms window Object / Browser APIs
//</p>

//<div className="row">
//{ProjectData.map((project, i) => (
//</div>  <div className="col-sm-6" key={i}>
//</div>    <iframe
//      width="100%"
//      height="300"
//      src={project.projectlink}
//      title="YouTube video player"
//      frameborder="0"
//      allow="accelerometer; autoplay; clipboard-write; //encrypted-media; gyroscope; picture-in-picture"
//      allowfullscreen
//    ></iframe>
//    <br />
//</div>    <a
//      href={project.codelink}
//      className="btn btn-default d-block github"
//      target="_blank"
//      rel="noreferrer"
//    >
//      Github Code <img src={githubImg} alt={i} />
//    </a>
//  </div>
//))}
//</div>

export default Jsprojects;
