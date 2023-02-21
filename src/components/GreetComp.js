import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import shape from "../assets/shape.png";

const GreetComp = () => {
  const string1Ref = useRef(null);
  const string2Ref = useRef(null);

  useEffect(() => {
    if (string1Ref.current) {
      const typed1 = new Typed(string1Ref.current, {
        strings: ["I am a Web developer..!"],
        typeSpeed: 100,
        backSpeed: 80,
        showCursor:false,
      });
      return () => {
        typed1.destroy();
      };
    }

    if (string2Ref.current) {
      const typed2 = new Typed(string2Ref.current, {
        strings: ["Hello I am Harsh Pandey"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true,
      });
      return () => {
        typed2.destroy();
      };
    }
  }, [string1Ref, string2Ref]);

  return (
    <>
      <div className="greet" id="Home">
        <div className="introContainer">
          <div ref={string2Ref}>Hello , I am Harsh Pandey</div>
          <div ref={string1Ref}></div>
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
