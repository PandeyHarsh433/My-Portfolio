import React from "react";
import Tesla from "../assets/Tesla.png";
import Imdb from "../assets/IMDB.png";
import Twitter from "../assets/Twtter.png";
import Admin from "../assets/Admin.png";

const Projects = () => {
  return (
    <>
      <div className="both2" id="Projects">
        <span
          style={{
            fontWeight: "600",
            paddingLeft: "7.5rem",
            paddingTop: "4rem",
          }}
          className="projectHead"
        >
          Projects
        </span>
        <div className="mainProjectContainer">
          <div className="firstHalf">
            <div className="projectImg">
              <a
                href="https://imdb-clone-roan.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Imdb} alt="" className="projectImg" />
              </a>
            </div>
            <div className="projectImg">
              <a
                href="https://admin-page-sage.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Admin} alt="" className="projectImg" />
              </a>
            </div>
          </div>
          <div className="secondHalf">
            <div className="projectImg">
              <a
                href="https://tesla-clone-snowy.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Tesla} alt="" className="projectImg" />
              </a>
            </div>
            <div className="projectImg">
              <a
                href="https://twitterclone-eight.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Twitter} alt="" className="projectImg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
