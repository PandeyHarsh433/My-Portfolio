import React from "react";
import Typed from "react-typed";
import shape from "../assets/shape.png";

const GreetComp = () => {
  return (
    <>
      <div className="greet" id="Home">
        <div className="introContainer">
          <div>
            <Typed
              strings={["Hello , I am Harsh Pandey"]}
              typeSpeed={100}
              showCursor={false}
            />
          </div>
          <div>
            <Typed
              strings={["I am a Web developer..!"]}
              typeSpeed={180}
              backSpeed={150}
              showCursor={false}
              loop
            />
          </div>
        </div>
        <div>
          <img src={shape} alt="" className="shapeImg" />
        </div>
        <div className="imgContainer">
          <img
            src={require("./../assets/myimg2.png")}
            alt=""
            className="myImg"
          />
        </div>
      </div>
    </>
  );
};

export default GreetComp;
