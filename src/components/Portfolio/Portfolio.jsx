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
import MindedCoder2 from "../../img/mindedcoder2.png"
import jobportal from "../../img/jobportal.png"
import ducat from "../../img/ducat.png"
// import protfolio from "../../img/protfolio.png"
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >

<SwiperSlide className="SwiperSlide">
          <a href="https://jobportalks.netlify.app/" target="_blank" rel="noreferrer"><img src={jobportal} alt="" /></a>
          <p>Minded Coder Job Portal</p>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <a href="https://mindedcoder.netlify.app/" target="_blank" rel="noreferrer"><img src={MindedCoder2} alt="" /></a>
          <p>Minded Coder2</p>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <a href="https://bhutaniinfra.netlify.app" target="_blank" rel="noreferrer"><img src={Bhutani133} alt="" /></a>
          <p>Bhutani Infra</p>
        </SwiperSlide>

        <SwiperSlide className="SwiperSlide">
          <a href="https://adminpanel133.netlify.app/" target="_blank" rel="noreferrer"><img src={AdminPanel} alt="img" /></a>
          <p>Admin Panel133</p>
        </SwiperSlide>

        <SwiperSlide className="SwiperSlide">
          <a href="https://codewithsonu.netlify.app/" target="_blank" rel="noreferrer"><img src={CodeWithPandey} alt="" /></a>
          <p >Code With Sonu </p>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://moviexstream.netlify.app/" target="_blank" rel="noreferrer"><img src={Moviex} alt="" /></a>
          <p > Moviex Strem  </p>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Sonu-Pandey1/News-Monkey" target="_blank" rel="noreferrer"><img src={NewsMonkey} alt="" /></a>
          <p >News Monkey </p>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://pandeyrealstate.netlify.app/" target="_blank" rel="noreferrer"> <img src={RealEstate} alt="" /></a>
          <p >Real Estate </p>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://sonu-pandey1.github.io/vite-project/" target="_blank" rel="noreferrer"><img src={TextUitels} alt="" /></a>
          <p > Text Uitels</p>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <a href="https://genuine-crostata-d0da30.netlify.app/" target="_blank" rel="noreferrer"><img src={ducat} alt="ducat" /></a>
          <p>Ducat</p>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://mindedcorder.netlify.app/" target="_blank" rel="noreferrer"> <img src={MindedCoder} alt="" /></a>
          <p >Minded Coder</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
