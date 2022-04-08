import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./AppsDetails.module.css"
// import Slider from "react-slick";
// import "./Slides.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
export const AppsDetail = () => {
	// const settings = {
	// 	dots: false,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 2,
	// 	slidesToScroll: 1,
	//   }
  const { userId } = useParams();
  const [userDetail, setUserDetail] = useState({});
  console.log(userId);
  useEffect(() => {
    fetch(`http://localhost:8000/posts/${userId}`, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUserDetail(json);
      })
      .catch((err) => {
        setUserDetail("err", err);
      });
  }, [userId]);
  return (
	  <div className={styles.wrap}>
    <div className={styles.gridDiv1}>
	
      <div className={styles.flexDiv1}>
		  <div className={styles.names}>
        <div>
          <img  className={styles.logo} src={userDetail.image} alt="" />
        </div>
        <div >
          <div className={styles.n1}>{userDetail.appName}</div>
          <div className={styles.n2}>{userDetail.appName}</div>
        </div>
		</div>
		<div className={styles.btnAndSearch}>
        <div>
          <button className={styles.connectBtn}>CONNECT</button>
          <button className={styles.buyBtn}>BUY</button>
        </div>
		<div>
        <input type="text" placeholder="Search"></input>
        <i class="fa fa-search"></i>
        </div>
		</div>
      </div>
	  <div className={styles.slides}>
      {/* <Slider className="slideImg" {...settings}>
       
          <img className="slideImg" src={userDetail.image} alt="" />

      </Slider> */}
	  </div>
      <div className={styles.aboutDiv}><p>{userDetail.about}</p></div>
 
	</div>
	</div>
  );
};
