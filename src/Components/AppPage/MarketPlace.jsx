import React from "react";
import { Apps } from "./Apps";
import { v4 as uuidv4 } from "uuid";
import styles from "./FeaturedApps.module.css";
export const MarketPlace = () => {
  const [page, setPage] = React.useState(1);
  const [appData, setAppData] = React.useState([]);
  React.useEffect(() => {
    display();
  }, [page]);
  function display() {
    fetch(`http://localhost:8000/posts?_page=${page}&_limit=15`, {
      method: "GET",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setAppData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log(appData);
  return (
    <div className={styles.div0}>
      <div>
      <h2>App Marketplace</h2>
   <hr/>
      </div>
      
      <div className={styles.div1}>
        {appData.map((el) => (
          <Apps
            key={uuidv4()}
            image={el.image}
            appName={el.appName}
            category={el.category}
          />
        ))}
      </div>
      <div className={styles.btnDiv}>
        <button
          onClick={() => {
            setPage(page - 1);
          }}
          style={{ display: page === 1 ? "none" : "inline-block" }}
          className={styles.arrowbtn}
        >
       &#10094;
        </button>
        <button
          onClick={() => {
            setPage(1);
          }}
          // style={{backgroundColor: page===1 ? '#0a5282':'white', color: page===1?'white' :'#0a5282'}}
          className={page===1 ? styles.marketbtn:styles.marketbtn1}
        >
          1
        </button>
        <button
          onClick={() => {
            setPage(2);
          }}
          className={page===2 ? styles.marketbtn:styles.marketbtn1}
        >
          2
        </button>
        <button
          onClick={() => {
            setPage(3);
          }}
          className={page===3 ? styles.marketbtn:styles.marketbtn1}
        >
          3
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
          style={{ display: page === 3 ? "none" : "inline-block" }}
          className={styles.arrowbtn}
        >
          &#10095;
        </button>
      </div>
      <br />
      <br />
    </div>
  );
};
