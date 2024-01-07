import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import AdminPanel from "../../img/adminpanel.png"
import Bhutani133 from "../../img/bhutani133.png"
import CodeWithPandey from "../../img/codewithpandey.png"
import Moviex from "../../img/moviex.png"
import NewsMonkey from "../../img/newsmonkey.png"
import RealEstate from "../../img/realestate.png"
import TextUitels from "../../img/textuitels.png"
import MindedCoder from "../../img/mindedcoder.png"
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide className="SwiperSlide">
          <a href="https://adminpanel133.netlify.app/" target="_blank" rel="noreferrer"><img src={AdminPanel} alt="img" /></a>
          <p>Overall, this project has been a valuable learning experience, allowing me to explore and implement advanced technologies and methodologies like HTML, SCSS, JAVASCRIPT, REACT, FIREBASE, METERIAL UI etc in web development. By successfully integrating Firebase and creating a sophisticated admin panel, I have demonstrated my proficiency in developing scalable and user-centric solutions. I am excited to apply these skills and experiences to future projects and continue exploring innovative solutions in the ever-evolving field of web development.</p>
        </SwiperSlide>
        <SwiperSlide  className="SwiperSlide">
        <a href="https://www.bhutani133.com/" target="_blank" rel="noreferrer"><img src={Bhutani133} alt="" /></a>
          <p>Throughout the duration of this project, i remained committed to delivering a high-quality solution that not only meets but exceeds the client's expectations. By leveraging my expertise in web development and employing innovative strategies such as dynamic routing, i was able to create a website that stands out for its performance, functionality, and user-centric design. I am proud of the work accomplished and look forward to applying these skills and experiences to future projects,in this project i am using technologies like HTML, SCSS, BOOTSTRAP, JAVASCRIPT, REACT etc.</p>
        </SwiperSlide>
        <SwiperSlide  className="SwiperSlide">
        <a href="https://codewithsonu.netlify.app/" target="_blank" rel="noreferrer"><img src={CodeWithPandey} alt="" /></a>
          <p>In summary, this website serves as a testament to my growing proficiency in web development and my ability to leverage APIs effectively to enhance website functionality. Through this project, I have gained valuable insights into the integration of APIs, advanced web development techniques, and user experience optimization. I look forward to applying these learnings to future projects This project has been a valuable learning experience, allowing me to explore and implement advanced technologies like HTML, CSS, JAVASCRIPT, REACT, BOOTSTRAP etc. </p>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://moviexstream.netlify.app/" target="_blank" rel="noreferrer"><img src={Moviex} alt="" /></a>
          
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://github.com/Sonu-Pandey1/News-Monkey" target="_blank" rel="noreferrer"><img src={NewsMonkey} alt="" /></a>
          
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://pandeyrealstate.netlify.app/" target="_blank" rel="noreferrer"> <img src={RealEstate} alt="" /></a>
         
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://sonu-pandey1.github.io/vite-project/" target="_blank" rel="noreferrer"><img src={TextUitels} alt="" /></a>
          
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://mindedcorder.netlify.app/" target="_blank" rel="noreferrer"> <img src={MindedCoder} alt="" /></a>
         
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
