import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
// import Resume from '../Services/Resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>skills</span>
        <span className="span3">
          <img src="https://cdn-icons-png.flaticon.com/128/2305/2305941.png" alt="" />
          <br />
          <img src="https://cdn-icons-png.flaticon.com/128/2305/2305903.png" alt="" />
          <br />
          <img src="https://cdn-icons-png.flaticon.com/128/2305/2305963.png" alt="" />
          <br />
          <img src="https://cdn-icons-png.flaticon.com/128/1183/1183672.png" alt="" />
          <br />
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path><path d="M15 12v-3"></path></svg>
          <br />
          <img src="https://t3.ftcdn.net/jpg/07/53/71/36/240_F_753713636_oXy04x1dJ63TFVF5bbmU7MNnMmvKs3xK.jpg" alt="" />
          <br />
          <img src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png" alt="" />
          <br />
          <img src="https://cdn-icons-png.flaticon.com/128/148/148953.png" alt="" /> 
          <br />
          
        </span>
        {/* <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a> */}
        {/* <a href={Resume} target="_blank" rel="noreferrer" > <button className="button s-button">Download CV</button></a> */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Web Developer"}
            detail={"Html, Css, Bootstrap, JavaScript, React, Nextjs"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"App Developer"}
            detail={"Html, Css, scss, JavaScript, React, ReactNative"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Figma, Sketch, Photoshop, Adobe Illustrator etc"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
