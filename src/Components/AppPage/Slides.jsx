import React from "react";
import Slider from "react-slick";
import "./Slides.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [
  "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_2_10_0_90706.png",
  "	https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_389_2_10_0_4027.png",
  "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_2_10_0_26145.png",
  "	https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_392_2_10_0_3957.png",
  "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_120_2_10_0_25954.png",
  "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_2_10_0_74866.png",
];
export const Slides = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="mainDiv">
      <Slider className="slideImg" {...settings}>
        {images.map((el) => (
          <img className="slideImg" src={el} alt="" />
        ))}
      </Slider>
    
    </div>
  );
};
