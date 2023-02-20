import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
  return (
    <div className="mainFooter" id="Explore">
      <div className="firstFooter">
        <div className="socialOption">
          <span>
            <a
              href="https://github.com/PandeyHarsh433"
              target="_blank"
              rel="noreferrer"
            >
              Github{" "}
            </a>
          </span>
        </div>
        <div className="socialOption">
          <span>
            <a
              href="https://leetcode.com/pandeyharsh704/"
              target="_blank"
              rel="noreferrer"
            >
              Leetcode{" "}
            </a>
          </span>
        </div>
        <div className="socialOption">
          <span>
            <a
              href="https://auth.geeksforgeeks.org/user/pandeyharsh704/"
              target="_blank"
              rel="noreferrer"
            >
              GeeksForGeeks
            </a>
          </span>
        </div>
        <div className="socialOption">
          <span>
            <a
              href="https://twitter.com/HarshPa58163449"
              target="_blank"
              rel="noreferrer"
            >
              Twitter{" "}
            </a>
          </span>
        </div>
        <div className="socialOption">
          <span>
            <a
              href="https://www.facebook.com/profile.php?id=100023977083779"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </span>
        </div>
        <div className="socialOption">
          <span>
            <a
              href="https://www.instagram.com/iharsh144/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram{" "}
            </a>
          </span>
        </div>
      </div>
      <div className="secondFooter">
        <div className="contactOption">
          <span>
            <EmailIcon />
          </span>
          <span>
            <a href="mailto: pandeyharsh704@gmail.com" className="mail">
              pandeyharsh704@gmail.com
            </a>
          </span>
        </div>
        <div className="contactOption">
          <span>
            <LocalPhoneIcon />
          </span>
          <span>
            <a href="tel:7081567775" className="mail">
              +91-7081567775
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
