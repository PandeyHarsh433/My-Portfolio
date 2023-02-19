import React from "react";
import Fab from "@mui/material/Fab";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import CV from "./../assets/Harsh_Resume.pdf";

const AboutMe = () => {
  const skills = [
    "Java (Primary Lan)",
    "Python",
    "C++",
    "Html",
    "Css",
    "Javascript",
    "Reactjs",
    "Nodejs",
    "Mongodb",
    "Express",
  ];
  const skillIcons = [
    "https://cdn-icons-png.flaticon.com/512/919/919854.png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968526.png",
    "https://cdn-icons-png.flaticon.com/512/658/658099.png",
    "https://cdn-icons-png.flaticon.com/512/8159/8159502.png",
  ];
  const tools = ["Git", "Github", "VS code", "Linux", "Docker"];
  const toolIcons = [
    "https://cdn-icons-png.flaticon.com/512/4494/4494683.png",
    "https://cdn-icons-png.flaticon.com/512/4926/4926624.png",
    "https://cdn-icons-png.flaticon.com/512/906/906324.png",
    "https://cdn-icons-png.flaticon.com/512/226/226772.png",
    "https://cdn-icons-png.flaticon.com/512/5969/5969124.png",
  ];

  const Bounce = styled.div`
    animation: 3s ${keyframes`${bounce}`} infinite;
  `;
  const style = {
    'color': "white",
    'backgroundColor': "#f8b500",
    'fontWeight': "500",
    'fontSize' : "15px",
    '@media(max-width:400px)': {
      'fontSize' : "10px",
    },
  };

  return (
    <div className="both" id="Proficiency">
      <div className="aboutMe">
        <div className="educationContainer">
          <div
            className="educationHead"
            style={{
              fontWeight: "600",
              paddingLeft: "1rem",
              paddingTop: "3rem",
            }}
          >
            Education
          </div>
          <div className="educationDetails">
            <div className="education">
              <span className="skillHead">High School :- </span>
              <span className="skillList">
                Blooming Buds Academy, Khalilabad UP, India
              </span>
            </div>
            <div className="education">
              <span className="skillHead">Intermediate :- </span>
              <span className="skillList">
                Sarla Intel Academy, Basti UP, India
              </span>
            </div>
            <div className="education">
              <span className="skillHead">Btech(2024) :- </span>
              <span className="skillList">
                Lovely Professional University , Jalandhar Punjab
              </span>
            </div>
          </div>
        </div>
        <div className="skillsNToolsContainer">
          <span className="skillHeading">Skills</span>
          <div className="skillsContainer">
            {skills.map((item, id) => (
              <div className="skills">
                <span className="iconContainer">
                  <img src={skillIcons[id]} alt="" style={{ width: "2rem" }} />
                </span>
                <span key={id} className="skillList listing">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <span className="toolHead">Tools</span>
          <div className="toolsContainer">
            {tools.map((item, id) => (
              <div className="skills">
                <span className="iconContainer">
                  <img src={toolIcons[id]} alt="" style={{ width: "2rem" }} />
                </span>
                <span key={id} className="skillList listing">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Bounce>
        <div className="downloadCV">
          <a
            href={CV}
            target='_blank'
            style={{ textDecoration: "none" }}
            download="Harsh_CV"
            rel="noreferrer"
          >
            <Fab
              variant="extended"
              color="yellow"
              aria-label="add"
              style={style}
            >
              Download CV
            </Fab>
          </a>
        </div>
      </Bounce>
    </div>
  );
};

export default AboutMe;
