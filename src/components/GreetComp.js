import React from "react";
import Typed from "react-typed";

const GreetComp = () => {
  return (
    <div className="greet" id="Home">
      <div className="introContainer">
        <div>
          <Typed
            strings={["Hello , I am Harsh Pandey"]}
            typeSpeed={250}
            showCursor={true}
          />
        </div>
        <div>
          <Typed
            strings={["I am a Web developer..!"]}
            typeSpeed={180}
            backSpeed={150}
            loop
          />
        </div>
      </div>
      <div className="imgContainer">
        <img src={require("./../assets/myimg2.png")} alt="" />
      </div>
    </div>
  );
};

export default GreetComp;
